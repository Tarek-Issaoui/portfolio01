import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-portfolio-domain.com'),
  title: "Tarek Issaoui - Full-Stack Developer",
  description: "Experienced Full-Stack Developer with 2+ years in web and mobile development. Specializing in React, Angular, Node.js, TypeScript, and modern JavaScript technologies.",
  keywords: "Full Stack Developer, React Developer, Angular Developer, Node.js Developer, JavaScript Expert, TypeScript, Technical Mentor, Web Development, Mobile Development",
  authors: [{ name: "Tarek Issaoui" }],
  creator: "Tarek Issaoui",
  openGraph: {
    title: "Tarek Issaoui - Full-Stack Developer ",
    description: "Experienced Full-Stack Developer specializing in modern web and mobile technologies",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarek Issaoui - Full-Stack Developer ",
    description: "Experienced Full-Stack Developer specializing in modern web and mobile technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/tarek_image.jpeg',
    shortcut: '/tarek_image.jpeg',
    apple: '/tarek_image.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
