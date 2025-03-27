import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quest Life",
  description: "Quest your life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body> 
        {children}
      </body>
    </html>
  );
}
