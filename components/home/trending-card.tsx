import React from "react";
import { cn } from "@/lib/utils";

export interface TrendingCardProps {
  status: "FALSE" | "MISLEADING" | "TRUE";
  time: string;
  category: string;
  title: string;
  description: string;
  link: string;
  delay?: string;
}

const TrendingCard: React.FC<TrendingCardProps> = ({
  status,
  time,
  category,
  title,
  description,
  link,
  delay,
}) => {
  const statusColors = {
    FALSE: "bg-red-500",
    MISLEADING: "bg-yellow-500",
    TRUE: "bg-green-500",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp",
        delay
      )}
    >
      <div className="relative">
        <div className="bg-neutral-200 h-48 flex items-center justify-center">
          <span className="text-neutral-500">Image Placeholder</span>
        </div>
        <span
          className={cn(
            "absolute top-4 right-4 text-white px-3 py-1 rounded-full text-sm font-medium",
            statusColors[status]
          )}
        >
          {status}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm text-neutral-500">{time}</span>
          <span className="mx-2">•</span>
          <span className="text-sm text-neutral-500">{category}</span>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <a
          href={link}
          className="text-red-500 font-medium hover:text-red-600 transition-colors"
        >
          Read Full Analysis →
        </a>
      </div>
    </div>
  );
};

export default TrendingCard;
