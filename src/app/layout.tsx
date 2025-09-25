import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SaasKit - Build Your Dream SaaS Platform",
  description: "Transform your ideas into reality with our powerful, scalable SaaS solution. Built for modern teams who demand excellence.",
  keywords: "SaaS, platform, business, teams, collaboration, productivity",
  authors: [{ name: "SaasKit Team" }],
  creator: "SaasKit",
  publisher: "SaasKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saaskit.com",
    title: "SaasKit - Build Your Dream SaaS Platform",
    description: "Transform your ideas into reality with our powerful, scalable SaaS solution.",
    siteName: "SaasKit",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaasKit - Build Your Dream SaaS Platform",
    description: "Transform your ideas into reality with our powerful, scalable SaaS solution.",
    creator: "@saaskit",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}