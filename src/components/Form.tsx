"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import BlurFade from "./ui/blur-fade";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Invalid email address." }),
  comment: z
    .string()
    .min(10, { message: "Comment must be at least 10 characters." }),
});

export function ProfileForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setLoading(true);
    const { username, email, comment } = data;
    console.log(data);
    console.log(process.env.NEXT_PUBLIC_DATABASEURL);
    const res = await fetch(`${process.env.NEXT_PUBLIC_DATABASEURL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, comment }),
    });
    if (res.status === 200) {
      toast({
        title: "Form submitted successfully",
        description:
          "Thank you for your submission. I will get back to you soon.",
        variant: "default",
      });
      setLoading(false);
    } else {
      toast({
        title: "Form submission failed",
        description:
          "Please contact me directly on my lindin or email m121zeeshan@gmail.com",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <BlurFade>
      <div
        className="flex justify-center flex-col flex-wrap
    "
      >
        <h1 className="text-3xl font-bold border-b-2 mb-4">Contact</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you eamil" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter you message here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? "Loading..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </BlurFade>
  );
}
