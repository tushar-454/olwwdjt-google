export type TPricingType = "Freebie" | "Professional" | "Enterprise";

export type TPricingFeature = {
    id: number;
    name: string;
    availableIn: TPricingType[];
};

export type TPricingPlan = {
    id: number;
    type: TPricingType;
    description: string;
    monthlyPrice: number;
    yearlyPrice: number;
    ctaLabel: string;
    isHighlighted?: boolean;
};

export const pricingFeatures: TPricingFeature[] = [
    {
        id: 1,
        name: "20,000+ of PNG & SVG graphics",
        availableIn: ["Freebie", "Professional", "Enterprise"],
    },
    {
        id: 2,
        name: "Access to 100 million stock images",
        availableIn: ["Freebie", "Professional", "Enterprise"],
    },
    {
        id: 3,
        name: "Upload custom icons and fonts",
        availableIn: ["Professional", "Enterprise"],
    },
    {
        id: 4,
        name: "Unlimited Sharing",
        availableIn: ["Professional", "Enterprise"],
    },
    {
        id: 5,
        name: "Upload graphics & video in up to 4k",
        availableIn: ["Professional", "Enterprise"],
    },
    {
        id: 6,
        name: "Unlimited Projects",
        availableIn: ["Professional", "Enterprise"],
    },
    {
        id: 7,
        name: "Instant Access to our design system",
        availableIn: ["Enterprise"],
    },
    {
        id: 8,
        name: "Create teams to collaborate on designs",
        availableIn: ["Enterprise"],
    },
];

export const pricingPlans: TPricingPlan[] = [
    {
        id: 1,
        type: "Freebie",
        description:
            "Ideal for individuals who need quick access to basic features.",
        monthlyPrice: 0,
        yearlyPrice: 0,
        ctaLabel: "Get Started Now",
    },
    {
        id: 2,
        type: "Professional",
        description:
            "Ideal for individuals who need advanced tools for client work.",
        monthlyPrice: 25,
        yearlyPrice: 19,
        ctaLabel: "Get Started Now",
        isHighlighted: true,
    },
    {
        id: 3,
        type: "Enterprise",
        description:
            "Ideal for businesses who need personalized services and security for large teams.",
        monthlyPrice: 100,
        yearlyPrice: 75,
        ctaLabel: "Get Started Now",
    },
];
