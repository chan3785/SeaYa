export interface ProjectType {
  id: string;
  title: string;
  creator: string;
  date: string;
  prize: string;
  imageUrl: string;
  description?: string;
  category?: string;
}

export const projects: ProjectType[] = [
  {
    id: "project1",
    title: "DeepBook Hackathon",
    creator: "DeepBook",
    date: "Mar 12 - Mar 20, 2025",
    prize: "10,000 USDC",
    imageUrl: "../../../public/deepbook-logo.png",
    description:
      "A hackathon focused on building DeFi applications using DeepBook's order book.",
    category: "hackathon",
  },
  {
    id: "project2",
    title: "Game Academy",
    creator: "Gameloft",
    date: "Apr 12 - Apr 25, 2025",
    prize: "10,000 USDC",
    imageUrl: "../../../public/game-academy.png",
    description: "Build innovative blockchain games on the Sui network.",
    category: "development",
  },
  {
    id: "project3",
    title: "SuiSwap Integration",
    creator: "SuiSwap",
    date: "May 5 - May 20, 2025",
    prize: "15,000 USDC",
    imageUrl: "../../../public/suiswap-logo.png",
    description:
      "Integrate SuiSwap into your DeFi applications for enhanced liquidity.",
    category: "development",
  },
  {
    id: "project4",
    title: "NFT Marketplace Design",
    creator: "ArtBlocks",
    date: "Jun 1 - Jun 15, 2025",
    prize: "8,000 USDC",
    imageUrl: "../../../public/nft-marketplace.png",
    description:
      "Design an intuitive and beautiful NFT marketplace for digital artists.",
    category: "design",
  },
  {
    id: "project5",
    title: "Sui Wallet Extension",
    creator: "Sui Foundation",
    date: "Jun 20 - Jul 10, 2025",
    prize: "12,000 USDC",
    imageUrl: "../../../public/wallet-extension.png",
    description: "Develop new features for the Sui wallet browser extension.",
    category: "development",
  },
  {
    id: "project6",
    title: "DeFi Dashboard",
    creator: "DeFiLabs",
    date: "Jul 15 - Aug 5, 2025",
    prize: "9,000 USDC",
    imageUrl: "../../../public/defi-dashboard.png",
    description: "Create a comprehensive dashboard for DeFi analytics on Sui.",
    category: "design",
  },
  {
    id: "project7",
    title: "Smart Contract Audit",
    creator: "SecureChain",
    date: "Aug 10 - Aug 30, 2025",
    prize: "20,000 USDC",
    imageUrl: "../../../public/smart-contract.png",
    description:
      "Participate in auditing smart contracts for security vulnerabilities.",
    category: "others",
  },
  {
    id: "project8",
    title: "Cross-Chain Bridge",
    creator: "BridgeX",
    date: "Sep 5 - Sep 25, 2025",
    prize: "25,000 USDC",
    imageUrl: "../../../public/cross-chain.png",
    description:
      "Develop a secure bridge between Sui and other blockchain networks.",
    category: "development",
  },
  {
    id: "project9",
    title: "Community Hackathon",
    creator: "SuiMavs",
    date: "Oct 10 - Oct 25, 2025",
    prize: "15,000 USDC",
    imageUrl: "../../../public/community-hackathon.png",
    description:
      "A community-driven hackathon focusing on Sui ecosystem growth.",
    category: "hackathon",
  },
  {
    id: "project10",
    title: "UI/UX Challenge",
    creator: "DesignDAO",
    date: "Nov 1 - Nov 15, 2025",
    prize: "7,000 USDC",
    imageUrl: "../../../public/uiux-challenge.png",
    description:
      "Design challenge for creating intuitive user interfaces for blockchain applications.",
    category: "design",
  },
];
