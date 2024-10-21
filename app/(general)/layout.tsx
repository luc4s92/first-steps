import { Navbar } from "@/components";

export const metadata = {
  title: "Lucas genreal Page",
  description: "Generated with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24 text-8xl">
        {children}
      </main>
    </>
  );
}
