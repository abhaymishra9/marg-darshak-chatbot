// app/layout.tsx
import { ReactNode } from "react";
import "./globals.css";  // Import Tailwind CSS

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        {children}
      </body>
    </html>
  );
}