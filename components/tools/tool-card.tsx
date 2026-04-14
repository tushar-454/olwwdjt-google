import type { TTool } from "@/db/tools";
import Image from "next/image";

export default function ToolCard({
    tool,
    index,
}: {
    tool: TTool;
    index: number;
}) {
    return (
        <div
            data-aos="fade-up"
            data-aos-delay={index * 50}
            className="inline-flex h-34.75 items-center justify-center rounded-[11px] bg-white pt-11.75 pr-17.5 pb-11.5 pl-11.5 transition-shadow hover:shadow-[0_4px_30.3px_0_rgba(255,138,168,0.28)] dark:invert"
        >
            <Image
                src={tool.image}
                alt={tool.name ? `${tool.name} logo` : "tool logo"}
                width={250}
                height={150}
            />
        </div>
    );
}
