"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink } from "lucide-react";
import { mockPeople } from "@/lib/mock-data";
import { AddPersonForm } from "@/components/add-person-form";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function PeoplePage() {
  const [isAddPersonOpen, setIsAddPersonOpen] = useState(false);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-200 pb-4">
        <div className="mb-4 sm:mb-0">
          <h1 className="text-4xl font-serif font-bold mb-2">
            People of Interest
          </h1>
          <p className="text-muted-foreground font-serif italic">
            Tracking influential voices shaping our future
          </p>
        </div>

        <Button
          className="w-full sm:w-auto"
          onClick={() => setIsAddPersonOpen(true)}
        >
          Add Person
        </Button>
      </div>

      <Dialog open={isAddPersonOpen} onOpenChange={setIsAddPersonOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Person</DialogTitle>
            <DialogDescription>
              Add a new person of interest to track their statements.
            </DialogDescription>
          </DialogHeader>
          <AddPersonForm onClose={() => setIsAddPersonOpen(false)} />
        </DialogContent>
      </Dialog>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {mockPeople.map((person) => (
          <Card
            key={person.id}
            className="border-none shadow-sm hover:shadow-md transition-shadow"
          >
            <CardHeader className="border-b border-gray-100">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={person.avatar} alt={person.name} />
                  <AvatarFallback className="font-serif">
                    {person.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <CardTitle className="text-2xl font-serif mb-1">
                    {person.name}
                  </CardTitle>
                  <div className="text-sm text-muted-foreground font-serif italic">
                    {person.position} at {person.company}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                  <span className="text-sm text-muted-foreground font-serif">
                    Published Statements
                  </span>
                  <span className="font-medium font-serif">
                    {person.statementCount}
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
                    {person.averageLethalityIndex}%
                  </span>
                </div>

                <Button
                  variant="outline"
                  className="w-full mt-2 font-serif hover:bg-gray-50"
                  asChild
                >
                  <a href={`/people/${person.id}`}>
                    Read More
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
