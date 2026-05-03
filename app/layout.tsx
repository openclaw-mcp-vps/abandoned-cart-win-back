import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CartReclaim – Win Back Abandoned Carts",
  description: "Analyzes abandoned cart data to create personalized email sequences with optimal timing and discount strategies for e-commerce store owners."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="80b7bef6-2511-41d8-84d5-2f0cac1290d9"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
