/**

 * TODO: REMOVE THIS FILE ONCE API IS INTEGRATED
 */

import { Statement } from "./types";

export const mockStatements: Array<Statement> = [
  {
    id: 1,
    author: "John Doe",
    position: "Tech CEO",
    company: "TechCorp",
    statement: "AI will replace all human jobs within 5 years",
    lethalityIndex: 85,
    upvotes: 1200,
    downvotes: 150,
    date: "2024-03-15",
    context: "Statement made during annual shareholders meeting",
    category: "Technology",
    image: "/images/ai-robots.jpg",
    proofs: [
      {
        source: "Tech Daily",
        url: "https://techdaily.com/article-1",
        quote: "The statement contradicts current AI development timelines",
      },
    ],
    relatedStatements: [2, 3],
  },
  {
    id: 2,
    author: "Jane Smith",
    position: "Political Leader",
    company: "Government",
    statement: "Climate change is a hoax perpetrated by rival nations",
    lethalityIndex: 92,
    upvotes: 3500,
    downvotes: 450,
    date: "2024-03-10",
    context: "Public rally speech",
    category: "Environment",
    proofs: [
      {
        source: "Science Journal",
        url: "https://sciencejournal.com/climate-evidence",
        quote: "Overwhelming scientific evidence supports climate change",
      },
    ],
  },
];

export const mockPeople = [
  {
    id: 1,
    name: "John Doe",
    position: "Tech CEO",
    company: "TechCorp",
    avatar: "/avatars/john-doe.jpg",
    statementCount: 15,
    averageLethalityIndex: 75,
    recentStatements: [
      "AI will replace all human jobs within 5 years",
      "Social media is more important than real relationships",
    ],
    categories: ["Technology", "Society"],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Political Leader",
    company: "Government",
    avatar: "/avatars/jane-smith.jpg",
    statementCount: 23,
    averageLethalityIndex: 82,
    recentStatements: [
      "Climate change is a hoax perpetrated by rival nations",
      "Education is not a priority for our nation",
    ],
    categories: ["Politics", "Environment"],
  },
];
