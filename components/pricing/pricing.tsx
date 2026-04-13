import Container from "../common/container";
import SectionHead from "../common/section-head";
import PriceUnitSwitch from "./price-unit-switch";
import PricingCards from "./pricing-cards";

export default function Pricing({ isYearly }: { isYearly: boolean }) {
    return (
        <section className="py-10" id="pricing">
            <Container className="max-w-300">
                <SectionHead
                    title="Airnbn Assistent"
                    highlightedTitle="pricing"
                    description="Choose a plan that's right for you"
                    titleClassName="text-4xl sm:text-[40px]"
                    descriptionClassName="text-lg sm:text-xl font-normal"
                />
                {/* pricing month - year switching */}
                <PriceUnitSwitch />
                {/* pricing table content */}
                <PricingCards isYearly={isYearly} />
            </Container>
        </section>
    );
}
