"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { useStore } from "@/lib/store";

export default function StatementPage({ params }: { params: { id: string } }) {
  const statement = useStore((state) =>
    state.statements.find((statement) => statement.id === Number(params.id))
  );

  if (!statement) {
    return <div>Statement not found</div>;
  }

  return (
    <div className="container mx-auto py-4 sm:py-8 font-serif px-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl sm:text-3xl font-serif">Statement Details</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Context</CardTitle>
                <CardDescription>
                  Let&apos;s understand why this statement is considered
                  &ldquo;wrong&rdquo;
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Content will go here</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
