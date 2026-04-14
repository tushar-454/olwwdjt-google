import { tools } from "@/db/tools";
import Container from "../common/container";
import SectionHead from "../common/section-head";
import ToolCard from "./tool-card";

export default function Tools() {
    return (
        <section className="py-10" id="tools">
            <SectionHead
                title="Our"
                highlightedTitle="Tools"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            {/* services grid content */}
            <div className="mt-24 bg-[#F9FAFB] py-9.5 dark:bg-[#161616]">
                <Container className="grid max-w-5xl grid-cols-1 gap-6.25 min-[500px]:grid-cols-2 md:grid-cols-3">
                    {tools.map((tool, index) => (
                        <ToolCard key={tool.id} index={index} tool={tool} />
                    ))}
                </Container>
            </div>
        </section>
    );
}
