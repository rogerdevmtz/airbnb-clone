import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb UI Clone · Next.js",
  description: "Clon de la interfaz de Airbnb con Next.js, React, TypeScript y Tailwind CSS.",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white font-sans text-gray-900">{children}</body>
    </html>
  );
};

export default RootLayout;
