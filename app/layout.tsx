import Header from "@/components/common/header";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
            className={cn("antialiased", "font-sans", dmSans.variable)}
        >
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
