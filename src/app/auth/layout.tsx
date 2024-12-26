import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Outfit Auth",
};

export default function Auth({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="min-h-svh grid place-items-center py-4  lg:py-12">
        {children}
      </div>
    </>
  );
}
