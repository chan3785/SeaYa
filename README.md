<h1 align="center">SeaYa</h1>
<h3 align="center">Sui ecosystem AI-driven event management platform</h3>

<p align="center">
  <a href="https://sea-ya.vercel.app/" style="color: #a77dff">Platform</a> | <a href="" style="color: #a77dff">Pitchdeck</a> | <a href="" style="color: #a77dff">Demo Video</a>
</p>

<p align="center">
  <a href="" style="color: #a77dff">dNFT Contract</a> | <a href="" style="color: #a77dff">Vote Contract</a> | <a href="" style="color: #a77dff">AI agent</a>
</p>


## Overview

This platform is designed to streamline event management within the Sui ecosystem, covering hackathons, seminars, conferences, side events, and all official Sui-hosted events. It enables users to register, submit projects or applications, vote, and evaluate submissions in a transparent and decentralized manner. Additionally, the platform automatically promotes events and displays real-time results using an AI agent.

## Problem

### Current Issues in Sui Event Management

1. **Fragmented Registration & Submission**
    - Events like hackathons, conferences, and side events use separate registration systems (e.g., Typeform, Google Forms), leading to inefficiencies.
2. **Limited Visibility**
    - Event promotion is mainly restricted to Twitter and Sui’s blog, reducing community engagement.
3. **Lack of Transparency in Selection & Evaluation**
    - Submissions and evaluations are not publicly accessible, making it difficult for users and judges to track processes.
4. **Minimal Community Participation**
    - The current system limits feedback and participation to organizers and judges, excluding the wider community.

## Solution

This platform addresses these challenges by:

- Providing a **unified system** for registration and participation in all Sui-related events.
- Displaying all submitted applications and projects in a **structured, publicly accessible format**.
- Enabling **community and judge-based evaluation & voting** to ensure fairness.
- Using **AI-powered automation** to promote events and showcase key highlights.
- Storing participation history and awards on **dynamic NFTs** as proof of engagement.

## Key Features

### Unified Event Management System
- Centralized platform for hackathons, conferences, side events, and official Sui programs.
- Secure and verifiable event data stored on the **Sui blockchain**.

### Transparent Project & Application Evaluation
- Event submissions are displayed publicly for easy access by organizers, judges, and the community.
- Organizers can **enable community voting** alongside judge evaluations.

### On-Chain Voting & Decision-Making
- Voting by judges and community members using **SUI, USDC, or USDT**.
- **zkLogin authentication** ensures secure voting and identity protection.

### AI-Powered Event Promotion & Analysis
- AI agent **automatically posts updates** on Twitter and other social media.
- The bot highlights **top projects, key events, and voting results** for better visibility.

### Dynamic NFTs for Event Participation & Achievements
- Users receive **NFT badges** that dynamically update with:
    - Events attended
    - Projects submitted
    - Awards received
    - Ranking and voting results

## User Flow

```mermaid
graph TD
    A[User visits Platform] -->|Login via zkLogin| B{Choose Event Type}
    B -->|Register for Hackathon| C[Submit Hackathon Registration]
    B -->|Register for Seminar/Conference| D[Submit Registration]
    B -->|Register for Side Event| E[Submit Application]

    C --> F[Data Stored on Sui Blockchain]
    D --> F
    E --> F

    B -->|Submit Project/Proposal| G[Submit Event Application]
    G --> H[Data Stored on Sui Blockchain]

    B -->|Vote on Projects/Selections| I[Judge & Community Voting]
    I --> J[Votes Stored on Sui Blockchain]

    K[AI Agent] -->|Promotes Event & Voting| L[Twitter & Social Media]
    M[Leaderboard Updates] -->|Dynamic NFT Updated| N[NFT Stored on Sui]

    H -->|Displayed for Review| O[Community & Judges Evaluate]
    J -->|Results Announced| P[Leaderboard & Rewards]

```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Platform
    participant SuiBlockchain
    participant AIAgent
    participant Judge
    participant Community

    User ->> Platform: Login via zkLogin
    Platform ->> SuiBlockchain: Authenticate User
    SuiBlockchain -->> Platform: Authentication Successful

    User ->> Platform: Register for Event (Hackathon, Seminar, etc.)
    Platform ->> SuiBlockchain: Store Registration Data
    SuiBlockchain -->> Platform: Storage Confirmed

    User ->> Platform: Submit Project/Proposal
    Platform ->> SuiBlockchain: Store Submission Data
    SuiBlockchain -->> Platform: Storage Confirmed

    Judge ->> Platform: Evaluate Submissions
    Platform ->> SuiBlockchain: Store Judge Votes
    SuiBlockchain -->> Platform: Storage Confirmed

    Platform ->> Community: Announce Community Voting
    Community ->> Platform: Submit Votes (SUI)
    Platform ->> SuiBlockchain: Store Community Votes
    SuiBlockchain -->> Platform: Storage Confirmed

    Platform ->> AIAgent: Promote Event and Results
    AIAgent -->> Twitter: Post Event and Voting Results

    Platform ->> SuiBlockchain: Update Dynamic NFT (Event History, Awards)
    SuiBlockchain -->> Platform: NFT Updated

    Platform ->> User: Notify About NFT Update
    Platform ->> Leaderboard: Update Rankings
    Leaderboard -->> User: Display Latest Rankings

```

## Summary

- This platform **unifies event management** for **all Sui-related events**, including hackathons, seminars, conferences, and side events.
- Users can **register, submit projects, and vote** inQW a decentralized and transparent manner.
- Judges and community members can **evaluate projects and vote using SUI**.
- AI agents handle **event promotion and project highlights** automatically.
- Participants receive **dynamic NFTs** that track their engagement and achievements in the ecosystem.
