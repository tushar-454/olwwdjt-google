import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { DM_Sans, Manrope, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["400", "500", "600", "700"],
});
const plusja = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-plusja",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_SITE_URL || "https://olwwdjt-google.vercel.app"
    ),
    title: {
        default: "Google | Airbnb Assistants for Property Management",
        template: "%s | Google",
    },
    description:
        "Manage your Airbnb properties with ease. Google provides AI-driven Airbnb assistants for efficient property management, streamlining your workflow and maximizing your earnings.",
    openGraph: {
        title: "Google | Airbnb Assistants for Property Management",
        description:
            "Manage your Airbnb properties with ease. Google provides AI-driven Airbnb assistants for efficient property management, streamlining your workflow and maximizing your earnings.",
        url: "/",
        siteName: "Google",
        images: [
            {
                url: "/assets/og.png",
                width: 1200,
                height: 630,
                alt: "Google - Airbnb Assistants for Property Management",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Google | Airbnb Assistants for Property Management",
        description:
            "Manage your Airbnb properties with ease using our AI-driven assistants.",
        images: ["/landing1.png"],
    },
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn(
                "antialiased",
                "font-sans",
                dmSans.variable,
                manrope.variable,
                poppins.variable,
                plusja.variable
            )}
        >
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebSite",
                            name: "Airbnb Assistants for Property Management",
                            url:
                                process.env.NEXT_PUBLIC_SITE_URL ||
                                "https://olwwdjt-google.vercel.app",
                        }),
                    }}
                />
            </head>
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
