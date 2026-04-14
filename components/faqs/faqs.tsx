import Container from "../common/container";
import SectionHead from "../common/section-head";
import FAQsAccordions from "./faqs-accordions";

export default function FAQs() {
    return (
        <section className="mt-20 py-10" id="faqs">
            <Container className="max-w-7xl rounded-lg bg-[#F9FAFB] dark:bg-[#161616]">
                <SectionHead
                    title="Frequently asked"
                    highlightedTitle="questions"
                    description="Everything you need to know about the product and billing."
                    descriptionClassName="text-lg sm:text-xl font-normal"
                />

                {/* faqs accordions  */}
                <FAQsAccordions />
            </Container>
        </section>
    );
}
