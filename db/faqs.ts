export type TFAQ = {
    id: number;
    question: string;
    answer: string;
};

export const faqs: TFAQ[] = [
    {
        id: 1,
        question: "Is there a free trial available?",
        answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
        id: 2,
        question: "Can I change my plan later?",
        answer: "Yes. You can switch plans anytime from your billing settings. Upgrades start right away, and downgrades are applied from your next billing cycle.",
    },
    {
        id: 3,
        question: "What is your cancellation policy?",
        answer: "You can cancel your subscription at any time. Your account will remain active until the end of the current paid period, and no further charges will be made.",
    },
    {
        id: 4,
        question: "Can other info be added to an invoice?",
        answer: "Absolutely. You can include custom invoice details such as company name, address, VAT or tax ID, and purchase order number.",
    },
    {
        id: 5,
        question: "How does billing work?",
        answer: "Billing is automatic based on your selected plan. You can choose monthly or yearly payments, and receipts are emailed after each successful transaction.",
    },
    {
        id: 6,
        question: "How do I change my account email?",
        answer: "Open account settings, update your email address, and confirm it through the verification link sent to your new email.",
    },
];
