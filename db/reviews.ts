export type TReviewCard = {
    id: number;
    image: string;
    name: string;
    comment: string;
    rating: number;
};

export const reviews: TReviewCard[] = [
    {
        id: 1,
        image: "/assets/jennywilson.png",
        name: "Jenny Wilson",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4,
    },
    {
        id: 2,
        image: "/assets/estherhoward.png",
        name: "Esther Howard",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 5,
    },
    {
        id: 3,
        image: "/assets/robertfox.png",
        name: "Robert Fox",
        comment:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        rating: 4,
    },
];
