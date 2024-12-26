"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { Icon } from "@iconify/react";

import { SignInSchema, signInSchema } from "./schema";
import { useState } from "react";
import Link from "next/link";

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data: SignInSchema) => {
    setLoading(true);
    console.log(data);
    toast({
      title: "dev",
      description: "look at console",
    });
    setLoading(false);
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("email")}
            />
            {errors.email && (
              <span className="text-xs text-destructive">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <a
                href="#"
                className="ml-auto text-sm underline-offset-4 hover:underline"
              >
                Forgot your password?
              </a>
            </div>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <span className="text-xs text-destructive">
                {errors.password.message}
              </span>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading && (
              <Icon icon={"tabler:loader"} className="animate-spin" />
            )}
            Sign In
          </Button>
        </div>
        <div className="text-center text-sm">
          {/* Don&apos;t */}
          Already have an account?{" "}
          <Link href="/auth/sign-in" className="underline underline-offset-4">
            Sign in
          </Link>
        </div>
      </div>
    </form>
  );
}
