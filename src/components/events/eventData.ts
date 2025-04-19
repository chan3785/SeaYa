export interface EventType {
  id: string;
  title: string;
  date: string;
  location: string;
  host: string;
  imageUrl: string;
  description?: string;
}

export const pastEvents: EventType[] = [
  {
    id: "event1",
    title: "Sui Brunch Meetup",
    date: "Mar 15, 2024 13:00 - 15:00 PM WAT",
    location: "Online",
    host: "SuiMavs",
    imageUrl: "../../../66b9d8f83609b138b3ab1436_Group1.png",
    description:
      "Join us for a virtual brunch meetup to discuss the latest developments in the Sui ecosystem.",
  },
  {
    id: "event2",
    title: "Sui Overflow Hackathon",
    date: "Mar 20, 2024 09:00 - 17:00 PM WAT",
    location: "Online",
    host: "SuiMavs",
    imageUrl:
      "../../../67162c1da2e19906b7757da5_1BnWqQQfn-vfYPou3ZTMtND0RDarlSvhbwsUF1zyzG81.png",
    description:
      "Participate in our hackathon and build innovative solutions on the Sui blockchain.",
  },
  {
    id: "event3",
    title: "Walrus Meetup",
    date: "Apr 05, 2024 14:00 - 16:00 PM WAT",
    location: "California, USA",
    host: "SuiMavs",
    imageUrl:
      "../../../67162c1da2e19906b7757da5_1BnWqQQfn-vfYPou3ZTMtND0RDarlSvhbwsUF1zyzG81.png",
    description:
      "An in-person meetup to network with Sui developers and enthusiasts.",
  },
  {
    id: "event4",
    title: "Sui Developer Workshop",
    date: "Apr 15, 2024 10:00 - 16:00 PM WAT",
    location: "Online",
    host: "Sui Foundation",
    imageUrl:
      "../../../67162c1f36214ab1f0f7964a_bU8vRbUeM9UgQdkA4u2snz1hU9jbZaVcAsCroBdshfU1.png",
    description:
      "Learn how to build decentralized applications on the Sui blockchain.",
  },
  {
    id: "event5",
    title: "Sui Ecosystem Conference",
    date: "May 10, 2024 09:00 - 18:00 PM WAT",
    location: "New York, USA",
    host: "Sui Foundation",
    imageUrl:
      "../../../67162c1f36214ab1f0f7964a_bU8vRbUeM9UgQdkA4u2snz1hU9jbZaVcAsCroBdshfU1.png",
    description:
      "A major conference bringing together projects, developers, and investors in the Sui ecosystem.",
  },
  {
    id: "event6",
    title: "Sui DeFi Summit",
    date: "May 25, 2024 13:00 - 17:00 PM WAT",
    location: "London, UK",
    host: "SuiMavs",
    imageUrl: "../../../66b9d8f83609b138b3ab1436_Group1.png",
    description:
      "Explore the latest innovations in decentralized finance on the Sui blockchain.",
  },
];

export const upcomingEvents: EventType[] = [
  {
    id: "past1",
    title: "Sui Launch Party",
    date: "Jan 10, 2024 18:00 - 22:00 PM WAT",
    location: "San Francisco, USA",
    host: "Sui Foundation",
    imageUrl: "../../../66b9d8f83609b138b3ab1436_Group1.png",
    description:
      "Celebrating the launch of the Sui mainnet with the community.",
  },
  {
    id: "past2",
    title: "Sui Developer Meetup",
    date: "Feb 05, 2024 14:00 - 16:00 PM WAT",
    location: "Online",
    host: "SuiMavs",
    imageUrl:
      "../../../67162c1da2e19906b7757da5_1BnWqQQfn-vfYPou3ZTMtND0RDarlSvhbwsUF1zyzG81.png",
    description:
      "A virtual meetup for developers to share their experiences building on Sui.",
  },
  {
    id: "past3",
    title: "Sui Governance Forum",
    date: "Feb 20, 2024 10:00 - 12:00 PM WAT",
    location: "Online",
    host: "Sui Foundation",
    imageUrl:
      "../../../67162c1f36214ab1f0f7964a_bU8vRbUeM9UgQdkA4u2snz1hU9jbZaVcAsCroBdshfU1.png",
    description: "Discussion on the future of governance in the Sui ecosystem.",
  },
];

export const discoverEvents: EventType[] = [
  {
    id: "discover1",
    title: "Sui Connect:Lagos",
    date: "Jun 15, 2024 10:00 - 16:00 PM WAT",
    location: "Country home, Africa",
    host: "Sui Foundation",
    imageUrl: "../../../66b9d8f83609b138b3ab1436_Group1.png",
    description:
      "Learn the fundamentals of Move programming language and how to build smart contracts on Sui.",
  },
  {
    id: "discover2",
    title: "Sui Presents Walrus",
    date: "Jun 25, 2024 09:00 - 18:00 PM WAT",
    location: "France",
    host: "SuiSeaYa",
    imageUrl: "../../../667a99d0566e8aaff761e1b3_img11.png",
    description:
      "Build innovative NFT marketplace solutions on the Sui blockchain and compete for prizes.",
  },
  {
    id: "discover3",
    title: "Sui Gaming Summit",
    date: "Jul 10, 2024 13:00 - 17:00 PM WAT",
    location: "Tokyo, Japan",
    host: "Sui Foundation",
    imageUrl: "../../../6633a11d2f0e855dbafd5b39_Group 2147256468-p-5001.png",
    description:
      "Explore the intersection of blockchain and gaming with Sui's high-performance infrastructure.",
  },
  {
    id: "discover4",
    title: "Sui Submit",
    date: "Jul 20, 2024 09:00 - 17:00 PM WAT",
    location: "Singapore",
    host: "SuiMavs",
    imageUrl:
      "../../../67162c1da2e19906b7757da5_1BnWqQQfn-vfYPou3ZTMtND0RDarlSvhbwsUF1zyzG81.png",
    description:
      "Connect with DeFi developers and learn about building financial applications on Sui.",
  },
  {
    id: "discover5",
    title: "Sui Deepbook",
    date: "Aug 05, 2024 14:00 - 16:00 PM WAT",
    location: "Online",
    host: "Sui Foundation",
    imageUrl:
      "../../../67162c1f36214ab1f0f7964a_bU8vRbUeM9UgQdkA4u2snz1hU9jbZaVcAsCroBdshfU1.png",
    description:
      "Join project leaders from across the Sui ecosystem to discuss collaboration opportunities.",
  },
  {
    id: "discover6",
    title: "Sui Connect2025",
    date: "Aug 15, 2024 10:00 - 16:00 PM WAT",
    location: "Online",
    host: "SuiMavs",
    imageUrl: "../../../coin1.png",
    description:
      "Learn best practices for securing your applications on the Sui blockchain.",
  },
  {
    id: "discover7",
    title: "Aftermath Bootcamp",
    date: "Sep 01, 2024 Various Times",
    location: "Multiple Locations Worldwide",
    host: "Sui Foundation",
    imageUrl: "../../../download3.png",
    description:
      "Join Sui enthusiasts around the world for a synchronized day of local meetups and networking.",
  },
  {
    id: "discover8",
    title: "Sui Bootcamp 2025",
    date: "Sep 20, 2024 09:00 - 18:00 PM WAT",
    location: "Dubai, UAE",
    host: "SuiSeaYa",
    imageUrl: "../../../splashpage_wide_resized_03-540x3041.png",
    description:
      "Discover how enterprises are leveraging Sui blockchain for real-world business applications.",
  },
];
