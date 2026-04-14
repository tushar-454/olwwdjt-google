import { cn } from "@/lib/utils";

type SectionHeadProps = {
    title: string;
    highlightedTitle: string;
    description: string;
    titleClassName?: string;
    descriptionClassName?: string;
};

export default function SectionHead({
    title,
    highlightedTitle,
    description,
    titleClassName,
    descriptionClassName,
}: SectionHeadProps) {
    return (
        <div className="flex flex-col items-center gap-3.5 p-4">
            <h1
                data-aos="fade-up"
                className={cn(
                    "text-center text-[32px] leading-normal font-bold",
                    titleClassName
                )}
            >
                {title} <span className="text-primary">{highlightedTitle}</span>
            </h1>
            <p
                data-aos="fade-up"
                className={cn(
                    "w-auto text-center text-sm leading-normal font-medium md:max-w-184.5",
                    descriptionClassName
                )}
            >
                {description}
            </p>
        </div>
    );
}
