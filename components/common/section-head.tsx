type SectionHeadProps = {
    title: string;
    highlightedTitle: string;
    description: string;
};

export default function SectionHead({
    title,
    highlightedTitle,
    description,
}: SectionHeadProps) {
    return (
        <div className="flex flex-col items-center gap-3.5">
            <h1 className="text-center text-[32px] leading-normal font-bold">
                {title} <span className="text-primary">{highlightedTitle}</span>
            </h1>
            <p className="w-auto text-center text-sm leading-normal font-medium md:max-w-184.5">
                {description}
            </p>
        </div>
    );
}
