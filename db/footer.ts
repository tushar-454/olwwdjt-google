export const footerColumns = ["Company", "Help", "Resources"] as const;

export type FooterColumns = (typeof footerColumns)[number];

export type TFooterColumn = Record<
    FooterColumns,
    {
        label: string;
        href: string;
    }[]
>;

export const footerColumnsData: TFooterColumn = {
    Company: [
        {
            label: "About",
            href: "/about",
        },
        {
            label: "Features",
            href: "/features",
        },
        {
            label: "Works",
            href: "/works",
        },
        {
            label: "Career",
            href: "/career",
        },
    ],
    Help: [
        {
            label: "Customer Support",
            href: "/customer-support",
        },
        {
            label: "Delivery Details",
            href: "/delivery-details",
        },
        {
            label: "Terms & Conditions",
            href: "/terms-and-conditions",
        },
        {
            label: "Privacy Policy",
            href: "/privacy-policy",
        },
    ],
    Resources: [
        {
            label: "Free eBooks",
            href: "/free-ebooks",
        },
        {
            label: "Development Tutorial",
            href: "/development-tutorial",
        },
        {
            label: "How to - Blog",
            href: "/how-to-blog",
        },
        {
            label: "Youtube Playlist",
            href: "/youtube-playlist",
        },
    ],
};
