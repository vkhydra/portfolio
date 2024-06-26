import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });
const domain = "victor.kulessa.com.br";
const urlString = `https://${domain}`;

export const metadata: Metadata = {
  title: "Victor Kulessa",
  description: "Victor Kulessa's personal website",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Victor Kulessa",
    description: "Victor Kulessa's personal website",
    locale: "pt-BR",
    type: "website",
    url: `${urlString}`,
    images: [
      {
        url: `${urlString}/og-image.png`,
        width: 800,
        height: 400,
      },
    ],
  },
  twitter: {
    title: "Victor Kulessa",
    description: "Victor Kulessa's personal website",
    card: "summary_large_image",
    site: "@_vkulessa",
    creator: "@_vkulessa",
    images: [
      {
        url: `${urlString}/og-image.png`,
        width: 800,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
