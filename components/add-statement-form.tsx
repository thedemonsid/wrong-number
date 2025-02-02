"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useStore } from "@/lib/store";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  author: z.string().min(2, "Author name is required"),
  position: z.string().min(2, "Position is required"),
  company: z.string().min(2, "Company is required"),
  statement: z.string().min(10, "Statement must be at least 10 characters"),
  proof: z.string().url("Must be a valid URL").optional(),
  context: z.string().optional(),
  lethalityIndex: z.number().min(0).max(100).default(0),
});

interface AddStatementFormProps {
  onClose: () => void;
}

export function AddStatementForm({ onClose }: AddStatementFormProps) {
  const router = useRouter();
  const addStatement = useStore((state) => state.addStatement);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      position: "",
      company: "",
      statement: "",
      proof: "",
      context: "",
      lethalityIndex: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // DB Operation: Create new statement
      // TODO: Backend Integration
      // - Create statement in database
      // - Handle author relationship (either create new or link existing)
      // - Create proof records if provided
      // - Create context record if provided
      // - Return created statement ID and data

      addStatement({
        ...values,
        date: new Date().toISOString(),
        upvotes: 0,
        downvotes: 0,
        category: "Uncategorized",
        proofs: [],
        context: values.context || "No context provided",
      });

      onClose();
      router.refresh();
    } catch (error) {
      // TODO: Backend Integration
      // - Add error handling for database operations
      // - Add user feedback for specific error cases
      console.error("Failed to add statement:", error);
    }
  }

  return (
    <div className="relative">
      <Button
        className="absolute right-0 top-0 p-2"
        variant="ghost"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="author"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Author</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="position"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Position/Role</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Tech CEO, Political Leader"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Tech Company, Political Organization"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="statement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Statement</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter the statement or opinion"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lethalityIndex"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lethality Index (%)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="proof"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Proof (URL)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter URL to image, video, or other proof"
                    type="url"
                    {...field}
                    value={field.value || ""}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex gap-4 mt-6">
            <Button type="submit" className="flex-1">
              Submit Statement
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
