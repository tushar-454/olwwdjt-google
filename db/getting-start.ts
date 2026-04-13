export type TGettingStartStep = {
    id: number;
    image: string;
    instruction: string;
};

export const gettingStartSteps: TGettingStartStep[] = [
    {
        id: 1,
        image: "/assets/userplus.png",
        instruction: "Add requirements & sign up today",
    },
    {
        id: 2,
        image: "/assets/userconnect.png",
        instruction: "Connect with your CSM & onboarding team",
    },
    {
        id: 3,
        image: "/assets/support.png",
        instruction: "Meet your STR Assistant next week",
    },
];
