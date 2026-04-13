import { gettingStartSteps } from "@/db/getting-start";
import Container from "../common/container";
import SectionHead from "../common/section-head";
import StepCard from "./step-card";

export default function GettingStart() {
    return (
        <section className="py-10" id="getting-started">
            <SectionHead
                title="Getting Started is"
                highlightedTitle="Easy"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            {/* services grid content */}
            <div className="mt-13.5">
                <Container className="grid max-w-5xl grid-cols-1 gap-14 px-8 min-[500px]:grid-cols-2 md:grid-cols-3 lg:gap-9.5 lg:p-4">
                    {gettingStartSteps.map((step, index) => (
                        <StepCard key={step.id} step={step} index={index} />
                    ))}
                </Container>
            </div>
        </section>
    );
}
