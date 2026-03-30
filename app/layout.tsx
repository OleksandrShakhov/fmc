import "./globals.css";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Family Medical Centre",
  description:
    "Family Medical Centre providing comprehensive healthcare services for all ages.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-stone-50 text-stone-800">
      
        <main className="min-h-screen">{children}</main>
        <Footer /> 
      </body>
    </html>
  );
}