export type TService = {
    id: number;
    image: string;
    title: string;
    slug: string;
    description: string;
};

export const services: TService[] = [
    {
        id: 1,
        image: "/assets/todolist.png",
        title: "Manage Property Listings",
        slug: "manage-property-listings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 2,
        image: "/assets/calander.png",
        title: "Manage Customer Bookings",
        slug: "manage-customer-bookings",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 3,
        image: "/assets/cleaningitem.png",
        title: "Schedule House Cleaning",
        slug: "schedule-house-cleaning",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 4,
        image: "/assets/thumbstar.png",
        title: "Monitor Guest Reviews",
        slug: "monitor-guest-reviews",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 5,
        image: "/assets/track.png",
        title: "Track & Report Expenses",
        slug: "track-report-expenses",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
    {
        id: 6,
        image: "/assets/message.png",
        title: "Guest Inquiry & Support",
        slug: "guest-inquiry-support",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
];
