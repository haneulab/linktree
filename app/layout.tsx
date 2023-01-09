import "../styles/globals.css";
import { type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="w-full bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-600 text-gray-50">
        {children}
      </body>
    </html>
  );
}
