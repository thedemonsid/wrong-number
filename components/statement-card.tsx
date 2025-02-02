"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, AlertCircle, ExternalLink } from "lucide-react";

interface StatementCardProps {
  id: number;
  author: string;
  position: string;
  statement: string;
  lethalityIndex: number;
  upvotes: number;
  downvotes: number;
  date: string;
  proof?: string;
  context?: string;
  image?: string;
}

export function StatementCard({
  id,
  author,
  position,
  statement,
  lethalityIndex,
  upvotes,
  downvotes,
  date,
  proof,
  context,
  image = `https://source.unsplash.com/random/800x400/?${encodeURIComponent(
    statement.split(" ")[0]
  )},news`,
}: StatementCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0">
          <div>
            <CardTitle className="text-lg sm:text-xl mb-1 font-serif">
              {author}
            </CardTitle>
            <CardDescription className="text-sm font-serif">
              {position}
            </CardDescription>
            <Link
              href={`/statements/${id}`}
              className="text-primary hover:underline text-sm mt-2 inline-flex items-center gap-1 font-serif"
            >
              View Full Statement
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
          <div className="flex items-center gap-2 bg-destructive/10 text-destructive px-2 sm:px-3 py-1 rounded-full text-sm whitespace-nowrap self-start">
            <AlertCircle className="w-4 h-4" />
            <span className="font-semibold font-serif">
              Lethality: {lethalityIndex}%
            </span>
          </div>
        </div>
      </CardHeader>

      {image && (
        <div className="relative w-full h-[200px] sm:h-[300px]">
          <Image
            src={image}
            alt="Statement context"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}

      <CardContent className="p-4 sm:p-6">
        <p className="text-base sm:text-lg mb-4 font-serif statement-text">
          {statement}
        </p>
        {context && (
          <div className="mb-4 p-4 bg-muted rounded-lg">
            <h4 className="font-semibold mb-2 font-serif">Context</h4>
            <p className="text-sm text-muted-foreground font-serif">
              {context}
            </p>
          </div>
        )}
        <div className="flex flex-wrap gap-2 sm:gap-4">
          {!context && (
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm flex-1 sm:flex-none font-serif"
              onClick={() => {
                // TODO: Implement context addition
                console.log("Add context clicked");
              }}
            >
              <AlertCircle className="w-4 h-4 mr-1 sm:mr-2 shrink-0" />
              Add Context
            </Button>
          )}
          {proof ? (
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm flex-1 sm:flex-none font-serif"
              asChild
            >
              <a href={proof} target="_blank" rel="noopener noreferrer">
                <AlertCircle className="w-4 h-4 mr-1 sm:mr-2 shrink-0" />
                View Proof
              </a>
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-xs sm:text-sm flex-1 sm:flex-none font-serif"
              onClick={() => {
                // TODO: Implement proof addition
                console.log("Add proof clicked");
              }}
            >
              <AlertCircle className="w-4 h-4 mr-1 sm:mr-2 shrink-0" />
              Add Proof
            </Button>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 sm:p-6 flex flex-col sm:flex-row sm:justify-between gap-3 sm:gap-0 border-t">
        <div className="flex gap-4 w-full sm:w-auto justify-center sm:justify-start">
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 sm:flex-none font-serif"
            onClick={() => {
              // TODO: Implement upvote
              console.log("Upvote clicked");
            }}
          >
            <ThumbsUp className="w-4 h-4 mr-1 sm:mr-2" />
            {upvotes}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 sm:flex-none font-serif"
            onClick={() => {
              // TODO: Implement downvote
              console.log("Downvote clicked");
            }}
          >
            <ThumbsDown className="w-4 h-4 mr-1 sm:mr-2" />
            {downvotes}
          </Button>
        </div>
        <time className="text-xs sm:text-sm text-muted-foreground text-center sm:text-right font-serif">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </CardFooter>
    </Card>
  );
}
