export interface Statement {
  id: number;
  author: string;
  position: string;
  company: string;
  statement: string;
  lethalityIndex: number;
  upvotes: number;
  downvotes: number;
  date: string;
  context: string;
  category: string;
  image?: string;
  proofs: {
    source: string;
    url: string;
    quote: string;
  }[];
  relatedStatements?: number[];
}
export interface Person {
  id: number;
  name: string;
  position: string;
  company: string;
  avatar?: string;
  statementCount: number;
  averageLethalityIndex: number;
  recentStatements: string[];
  categories: string[];
  socialMedia?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
  bio?: string;
}
