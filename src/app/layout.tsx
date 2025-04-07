import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const frameMetadata = {
  version: "next",
  imageUrl: "/next.svg",
  button: {
    title: "🚀 Start",
    action: {
      type: "launch_frame",
      name: "Hello World",
      url: "https://hello-world-miniapp.vercel.app",
      splashImageUrl: "/vercel.svg",
      splashBackgroundColor: "#855dcd"
    }
  }
};

export const metadata: Metadata = {
  title: "Hello World Mini App",
  description: "A simple Hello World Farcaster Mini App",
  metadataBase: new URL("https://hello-world-miniapp.vercel.app"),
  openGraph: {
    title: "Hello World Mini App",
    description: "A simple Hello World Farcaster Mini App",
    images: [
      {
        url: "/next.svg",
        width: 1200,
        height: 630,
      },
    ],
  },
  other: {
    "fc:frame": JSON.stringify(frameMetadata)
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="fc:frame" content={JSON.stringify(frameMetadata)} />
      </head>
      <body className={inter.className} style={{ backgroundColor: '#855dcd', color: 'white', minHeight: '100vh', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
