import type { Metadata } from "next";
import styles from "./page.module.css"

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
      <body className={styles.body}> 
        {children}
      </body>
    </html>
  );
}
