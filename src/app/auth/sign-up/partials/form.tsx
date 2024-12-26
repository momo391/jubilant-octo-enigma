"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

import { SignUpSchema, signUpSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
export function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data: SignUpSchema) => {
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
          <div className="flex gap-4">
            <div className="grid gap-2">
              <Label htmlFor="last_name">Last Name</Label>
              <Input
                id="last_name"
                type="text"
                placeholder="John"
                {...register("last_name")}
              />
              {errors.last_name && (
                <span className="text-xs text-destructive">
                  {errors.last_name.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="first_name">First Name</Label>
              <Input
                id="first_name"
                type="text"
                placeholder="Doe"
                {...register("first_name")}
              />
              {errors.first_name && (
                <span className="text-xs text-destructive">
                  {errors.first_name.message}
                </span>
              )}
            </div>
          </div>
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
          <div className="grid gap-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              id="confirm_password"
              type="password"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <span className="text-xs text-destructive">
                {errors.confirm_password.message}
              </span>
            )}
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && (
              <Icon icon={"tabler:loader"} className="animate-spin" />
            )}
            Sign Up
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
