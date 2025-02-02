import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { mockStatements } from "@/lib/mock-data";
import { StatementCard } from "@/components/statement-card";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const statements = mockStatements;

  // Calculate statistics
  const totalStatements = statements.length;
  const averageLethality = Math.round(
    statements.reduce((acc, curr) => acc + curr.lethalityIndex, 0) /
      totalStatements
  );

  return (
    <div className="container mx-auto py-4 sm:py-8 font-serif px-4">
      <div className="flex flex-col lg:grid lg:grid-cols-[2fr_1fr] gap-6 sm:gap-8">
        <main className="order-2 lg:order-1">
          <h2 className="text-xl sm:text-2xl font-serif mb-4 sm:mb-6 border-b pb-2">
            Latest Statements
          </h2>
          <div className="space-y-6 sm:space-y-8">
            {statements.map((statement) => (
              <StatementCard key={statement.id} {...statement} />
            ))}
          </div>
        </main>

        <aside className="space-y-4 sm:space-y-6 order-1 lg:order-2">
          <Card className="p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b pb-2">
              Overview
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="text-sm text-muted-foreground font-serif">
                  Published Statements
                </span>
                <span className="font-medium font-serif">
                  {totalStatements}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <div className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  <span className="text-sm text-muted-foreground font-serif">
                    Average Lethality
                  </span>
                </div>
                <span className="font-medium font-serif">
                  {averageLethality}%
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b pb-2">
              Categories
            </h3>
            <div className="space-y-1 sm:space-y-2">
              {["Technology", "Politics", "Environment", "Society"].map(
                (category) => (
                  <Button
                    key={category}
                    variant="ghost"
                    className="w-full justify-start font-serif text-sm sm:text-base"
                  >
                    {category}
                  </Button>
                )
              )}
            </div>
          </Card>

          <Card className="p-3 sm:p-4">
            <h3 className="text-lg sm:text-xl font-serif mb-3 sm:mb-4 border-b pb-2">
              Most Lethal
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {statements
                .sort((a, b) => b.lethalityIndex - a.lethalityIndex)
                .slice(0, 3)
                .map((statement) => (
                  <div key={statement.id} className="space-y-2">
                    <p className="font-serif text-sm sm:text-base line-clamp-2">
                      {statement.statement}
                    </p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-muted-foreground">
                      <span>{statement.author}</span>
                      <span className="text-destructive">
                        {statement.lethalityIndex}%
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
