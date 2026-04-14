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

export const metadata = {
    title: "Google",
    description:
        "Google is a technology company that specializes in internet-related services and products, including search engines, online advertising, cloud computing, software, and hardware.",
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
