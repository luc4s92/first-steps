import "./globals.css";

export const metadata = {
  title: "Lucas Home Page",
  description: "Generated with love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
