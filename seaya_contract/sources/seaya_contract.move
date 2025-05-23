/// Module: seaya_contract
module seaya::seaya_v2 {
    use sui::coin::{Self, Coin};
    use sui::event;
    use sui::sui::SUI;
    use std::string::String;
    use sui::balance::{Self, Balance};
    use sui::object::{UID, ID};
    use sui::transfer;
    use sui::tx_context::TxContext;
    use std::vector;
    
    // 使用 SUI 代幣替代自定義 BUCK
    // 取消定義自定義 BUCK，改用 SUI
    
    public struct EventCreated has copy, drop {
        id: ID,
        name: String,
        host: address,
        ticket_price: u64,
    }

    public struct EventEdited has copy, drop {
        id: ID,
        name: String,
        ticket_price: u64,
    }

    public struct AttendeeRegistered has copy, drop {
        event_id: ID,
        attendee: address,
    }

    public struct EventTicket has key, store {
        id: UID,
        event_id: ID,
        attendee: address,
    }

    public struct Event has key {
        id: UID,
        name: String,
        description: String,
        location: String,
        date: String,
        host: address,
        ticket_price: u64,
        max_attendees: u64,
        attendees: vector<address>,
        status: u8,                        // Event status (active, ended, canceled)
        attendee_details: vector<Attendee>, // Detailed attendee information including payment and refund status
        funds: Balance<SUI>,              // Collected funds in SUI
    }

    public struct Project has key {
        id: UID,
        event_id: ID,
        creator: address,
        name: String,
        description: String,
        details: String,
        votes: u64,
        voters: vector<address>,
    }

    public struct ProjectCreated has copy, drop {
        id: ID,
        event_id: ID,
        creator: address,
        name: String,
    }

    public struct Voted has copy, drop {
        project: ID,
        voter: address 
    }  

    // ===== Error Codes =====
    /// Unauthorized access - caller is not the event host
    const E_NOT_HOST: u64 = 1;
    /// Event has reached maximum number of attendees
    const E_MAX_ATTENDEES_REACHED: u64 = 2;
    /// User has already registered for the event
    const E_ALREADY_REGISTERED: u64 = 3;
    /// Payment amount is insufficient
    const E_INSUFFICIENT_PAYMENT: u64 = 4;
    /// Event is no longer active (ended or canceled)
    const E_EVENT_NOT_ACTIVE: u64 = 5;
    /// Event has not been canceled, refund not available
    const E_EVENT_NOT_CANCELED: u64 = 7;
    /// User is not an attendee of this event
    const E_NOT_ATTENDEE: u64 = 8;
    /// User has already received a refund
    const E_ALREADY_REFUNDED: u64 = 9;
    /// Unauthorized reward distributor
    const E_NOT_AUTHORIZED: u64 = 10;
    const E_PROJECT_ALREADY_EXISTS: u64 = 11;
    const E_ALREADY_VOTED: u64 = 12;
    const E_PROJECT_NOT_FOUND: u64 = 13;
    const E_NOT_JUDGE: u64 = 14;


    // ===== Event Status Constants =====
    /// Event status: active, ended, canceled
    const STATUS_ACTIVE: u8 = 0;
    const STATUS_ENDED: u8 = 1;
    const STATUS_CANCELED: u8 = 2;

    // ===== Event Definitions =====
    /// Event status change event
    public struct EventStatusChanged has copy, drop {
        id: ID,
        new_status: u8,
    }

    /// Refund processed event
    public struct RefundProcessed has copy, drop {
        event_id: ID,
        attendee: address,
        amount: u64,
    }

    /// Funds withdrawal event
    public struct FundsWithdrawn has copy, drop {
        event_id: ID,
        amount: u64,
    }

    // ===== Struct Definitions =====
    /// Attendee information including payment details
    public struct Attendee has store, drop {
        // Attendee address
        addr: address,
        // Payment amount
        amount: u64,
        // Whether refund has been processed
        refunded: bool,
    }

    /// Register for an event with fee
    #[allow(lint(self_transfer))]
    public fun register_with_fee(
        event: &mut Event, 
        payment: Coin<SUI>, 
        ctx: &mut TxContext
    ) {
        // Verify event is active
        assert!(event.status == STATUS_ACTIVE, E_EVENT_NOT_ACTIVE);
        // Verify event has not reached maximum attendees
        assert!(vector::length(&event.attendees) < event.max_attendees, E_MAX_ATTENDEES_REACHED);

        let attendee_address = tx_context::sender(ctx);
        // Verify user has not already registered
        assert!(!vector::contains(&event.attendees, &attendee_address), E_ALREADY_REGISTERED);
        
        let payment_amount = coin::value(&payment);
        // Verify payment amount is sufficient
        assert!(payment_amount >= event.ticket_price, E_INSUFFICIENT_PAYMENT);

        // Add attendee to list
        vector::push_back(&mut event.attendees, attendee_address);
        
        // Add detailed attendee information
        vector::push_back(&mut event.attendee_details, Attendee {
            addr: attendee_address,
            amount: payment_amount,
            refunded: false,
        });
        
        // Deposit funds
        let coin_balance = coin::into_balance(payment);
        balance::join(&mut event.funds, coin_balance);

        // Create event ticket
        let ticket = EventTicket {
            id: object::new(ctx),
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        };

        // Emit registration event
        event::emit(AttendeeRegistered {
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        });

        // Transfer ticket to attendee
        transfer::transfer(ticket, attendee_address);
    }

    /// End event and withdraw funds (host only)
    #[allow(lint(self_transfer))]
    public fun end_event_and_withdraw(
        event: &mut Event,
        ctx: &mut TxContext
    ) {
        // Verify caller is host
        let sender = tx_context::sender(ctx);
        assert!(sender == event.host, E_NOT_HOST);
        
        // Verify event is active
        assert!(event.status == STATUS_ACTIVE, E_EVENT_NOT_ACTIVE);
        
        // Update event status to ended
        event.status = STATUS_ENDED;
        
        // Emit status change event
        event::emit(EventStatusChanged {
            id: object::uid_to_inner(&event.id),
            new_status: STATUS_ENDED,
        });
        
        // Withdraw all funds
        let funds_amount = balance::value(&event.funds);
        let funds = balance::withdraw_all(&mut event.funds);
        let coins = coin::from_balance(funds, ctx);
        
        // Emit funds withdrawal event
        event::emit(FundsWithdrawn {
            event_id: object::uid_to_inner(&event.id),
            amount: funds_amount,
        });
        
        // Transfer funds to host
        transfer::public_transfer(coins, sender);
    }

    /// Cancel event (host only)
    public fun cancel_event(
        event: &mut Event,
        ctx: &mut TxContext
    ) {
        // Verify caller is host
        let sender = tx_context::sender(ctx);
        assert!(sender == event.host, E_NOT_HOST);
        
        // Verify event is active
        assert!(event.status == STATUS_ACTIVE, E_EVENT_NOT_ACTIVE);
        
        // Update event status to canceled
        event.status = STATUS_CANCELED;
        
        // Emit status change event
        event::emit(EventStatusChanged {
            id: object::uid_to_inner(&event.id),
            new_status: STATUS_CANCELED,
        });
    }

    /// Request refund (available when event is canceled)
    #[allow(lint(self_transfer))]
    public fun request_refund(
        event: &mut Event,
        ctx: &mut TxContext
    ) {
        // Verify event is canceled
        assert!(event.status == STATUS_CANCELED, E_EVENT_NOT_CANCELED);
        
        let attendee = tx_context::sender(ctx);
        
        // Verify user is an attendee
        assert!(vector::contains(&event.attendees, &attendee), E_NOT_ATTENDEE);
        
        // Find attendee details
        let attendee_index = find_attendee_index(event, attendee);
        let attendee_detail = vector::borrow_mut(&mut event.attendee_details, attendee_index);
        
        // Verify not already refunded
        assert!(!attendee_detail.refunded, E_ALREADY_REFUNDED);
        
        // Mark as refunded
        attendee_detail.refunded = true;
        
        // Process refund
        let refund_amount = attendee_detail.amount;
        let refund = balance::split(&mut event.funds, refund_amount);
        let coins = coin::from_balance(refund, ctx);
        
        // Emit refund event
        event::emit(RefundProcessed {
            event_id: object::uid_to_inner(&event.id),
            attendee,
            amount: refund_amount,
        });
        
        // Transfer refund to attendee
        transfer::public_transfer(coins, attendee);
    }

    // ===== Query Functions =====
    /// Get total collected funds
    public fun get_total_funds(event: &Event): u64 {
        balance::value(&event.funds)
    }

    /// Check if user is an attendee of the event
    public fun is_attendee(event: &Event, addr: address): bool {
        vector::contains(&event.attendees, &addr)
    }

    /// Check if attendee has been refunded
    public fun is_refunded(event: &Event, addr: address): bool {
        let attendee_index = find_attendee_index(event, addr);
        if (attendee_index == vector::length(&event.attendee_details)) {
            // Not an attendee
            false
        } else {
            let attendee = vector::borrow(&event.attendee_details, attendee_index);
            attendee.refunded
        }
    }

    /// Find attendee index in attendee_details vector
    fun find_attendee_index(event: &Event, addr: address): u64 {
        let mut i = 0;
        let len = vector::length(&event.attendee_details);
        
        while (i < len) {
            let attendee = vector::borrow(&event.attendee_details, i);
            if (attendee.addr == addr) {
                return i
            };
            i = i + 1;
        };
        
        // Return length if not found
        len
    }

    /// Distribute reward to event organizer (only from authorized address)
    public fun distribute_organizer_reward(
        event: &Event,
        reward: Coin<SUI>,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);
        // 使用您的實際地址，這裡需要填入您的地址
        // 例如：@0x883ec267a6986d4cefb71f712287f3d3649bac54a291251e3af7265647b86733
        let authorized_distributor = @0x883ec267a6986d4cefb71f712287f3d3649bac54a291251e3af7265647b86733;
        
        // Verify sender is authorized distributor
        assert!(sender == authorized_distributor, E_NOT_AUTHORIZED);
        
        // Send reward to event host
        transfer::public_transfer(reward, event.host);
    }

    public fun create_event(name: String, description: String, location: String, date: String, ticket_price: u64, max_attendees: u64, ctx: &mut TxContext) {
        let host = tx_context::sender(ctx);
        let eventObject = Event {
            id: object::new(ctx),
            name,
            description,
            location,
            date,
            host,
            ticket_price,
            max_attendees,
            attendees: vector::empty<address>(),
            status: STATUS_ACTIVE,
            attendee_details: vector::empty<Attendee>(),
            funds: balance::zero<SUI>()
        };

        event::emit(EventCreated {
            id: object::uid_to_inner(&eventObject.id),
            name,
            host,
            ticket_price,
        });

        transfer::share_object(eventObject);
    }

    public fun edit_event(
        event: &mut Event,
        new_name: String,
        new_description: String,
        new_location: String,
        new_date: String,
        new_ticket_price: u64,
        new_max_attendees: u64,
        ctx: &mut TxContext
    ) {
        assert!(tx_context::sender(ctx) == event.host, E_NOT_HOST);

        event.name = new_name;
        event.description = new_description;
        event.location = new_location;
        event.date = new_date;
        event.ticket_price = new_ticket_price;
        event.max_attendees = new_max_attendees;

        event::emit(EventEdited {
            id: object::uid_to_inner(&event.id),
            name: new_name,
            ticket_price: new_ticket_price,
        });
    }

    public fun create_project(
        event: &Event,
        name: String,
        description: String,
        details: String,
        ctx: &mut TxContext
    ) {
        let creator = tx_context::sender(ctx);
        let project = Project {
            id: object::new(ctx),
            event_id: object::uid_to_inner(&event.id),
            creator,
            name,
            description,
            details,
            votes: 0,
            voters: vector::empty<address>(),
        };

        event::emit(ProjectCreated {
            id: object::uid_to_inner(&project.id),
            event_id: object::uid_to_inner(&event.id),
            creator,
            name,
        });

        transfer::share_object(project);
    }

    public fun vote_on_project(
        project: &mut Project,
        event: &mut Event,
        ctx: &mut TxContext
) {
    let voter = tx_context::sender(ctx);

    assert!(vector::contains(&event.attendees, &voter), E_NOT_JUDGE);
    assert!(!vector::contains(&project.voters, &voter), E_ALREADY_VOTED);

    // Record the vote
    vector::push_back(&mut project.voters, voter);
    project.votes = project.votes + 1;

    event::emit(Voted {
        project: object::uid_to_inner(&project.id),
        voter,
    });
}


    #[allow(lint(self_transfer))]
    public fun register_for_event(event: &mut Event, ctx: &mut TxContext){
        // Verify event is active
        assert!(event.status == STATUS_ACTIVE, E_EVENT_NOT_ACTIVE);
        // Verify event has not reached maximum attendees
        assert!(vector::length(&event.attendees) < event.max_attendees, E_MAX_ATTENDEES_REACHED);

        let attendee_address = tx_context::sender(ctx);
        // Verify user has not already registered
        assert!(!vector::contains(&event.attendees, &attendee_address), E_ALREADY_REGISTERED);

        vector::push_back(&mut event.attendees, attendee_address);
        
        // Add detailed attendee information (with zero payment)
        vector::push_back(&mut event.attendee_details, Attendee {
            addr: attendee_address,
            amount: 0,
            refunded: false,
        });

        let ticket = EventTicket {
            id: object::new(ctx),
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        };

        event::emit(AttendeeRegistered {
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        });

        transfer::transfer(ticket, attendee_address)
    }

    /// Register for an event with any coin type (including BUCK)
    /// This function accepts any coin type as payment, but does not keep the coins
    /// Instead, it directly transfers the payment to the event host
    #[allow(lint(self_transfer))]
    public fun register_with_any_coin<CoinType>(
        event: &mut Event,
        payment: Coin<CoinType>,
        ctx: &mut TxContext
    ) {
        // Verify event is active
        assert!(event.status == STATUS_ACTIVE, E_EVENT_NOT_ACTIVE);
        // Verify event has not reached maximum attendees
        assert!(vector::length(&event.attendees) < event.max_attendees, E_MAX_ATTENDEES_REACHED);

        let attendee_address = tx_context::sender(ctx);
        // Verify user has not already registered
        assert!(!vector::contains(&event.attendees, &attendee_address), E_ALREADY_REGISTERED);
        
        // Check if payment meets required amount (converted to smallest unit)
        let payment_amount = coin::value(&payment);
        assert!(payment_amount >= event.ticket_price, E_INSUFFICIENT_PAYMENT);

        // Add attendee to list
        vector::push_back(&mut event.attendees, attendee_address);
        
        // Add detailed attendee information
        vector::push_back(&mut event.attendee_details, Attendee {
            addr: attendee_address,
            amount: payment_amount,
            refunded: false,
        });
        
        // Transfer payment directly to the host instead of storing it
        // This simplifies handling different coin types
        transfer::public_transfer(payment, event.host);

        // Create event ticket
        let ticket = EventTicket {
            id: object::new(ctx),
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        };

        // Emit registration event
        event::emit(AttendeeRegistered {
            event_id: object::uid_to_inner(&event.id),
            attendee: attendee_address,
        });

        // Transfer ticket to attendee
        transfer::transfer(ticket, attendee_address);
    }
}

// For Move coding conventions, see
// https://docs.sui.io/concepts/sui-move-concepts/conventions


