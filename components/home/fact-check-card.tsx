import { cn } from '@/lib/utils';
import React from 'react';


export interface FactCheckCardProps {
  status: 'FALSE' | 'PARTIALLY TRUE' | 'TRUE';
  publishedTime: string;
  title: string;
  description: string;
  author: string;
  readTime: string;
  link: string;
  delay?: string;
}

const FactCheckCard: React.FC<FactCheckCardProps> = ({ status, publishedTime, title, description, author, readTime, link, delay }) => {
  const statusColors = {
    FALSE: 'bg-red-500',
    'PARTIALLY TRUE': 'bg-yellow-500',
    TRUE: 'bg-green-500',
  };

  return (
    <div className={cn("bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp", delay)}>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="bg-neutral-200 h-full min-h-[200px] flex items-center justify-center">
            <span className="text-neutral-500">Image Placeholder</span>
          </div>
        </div>
        <div className="md:w-2/3 p-6">
          <div className="flex items-center gap-4 mb-4">
            <span className={cn("text-white px-3 py-1 rounded-full text-sm font-medium", statusColors[status])}>{status}</span>
            <span className="text-neutral-500 text-sm">{publishedTime}</span>
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-neutral-600 mb-4">{description}</p>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm text-neutral-500">By {author}</span>
            <span className="text-sm text-neutral-500">•</span>
            <span className="text-sm text-neutral-500">{readTime}</span>
          </div>
          <a href={link} className="inline-flex items-center text-red-500 font-medium hover:text-red-600">
            Read Complete Analysis
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FactCheckCard;