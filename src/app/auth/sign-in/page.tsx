import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { SignInForm } from "./partials/form";

export default function Page() {
  return (
    <div className="w-screen max-w-sm">
      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Welcome back</CardTitle>
            <CardDescription>fill the form to sign in</CardDescription>
          </CardHeader>
          <CardContent>
            <SignInForm />
          </CardContent>
        </Card>
        <div className="text-balance text-center text-sm text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
          follow me on github <a href="#">momo391</a>.
        </div>
      </div>
    </div>
  );
}
