import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/db/faqs";

export default function FAQsAccordions() {
    return (
        <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="mt-20 w-full"
        >
            {faqs.map((faq, index) => (
                <AccordionItem
                    data-aos="fade-up"
                    data-aos-delay={index * 50}
                    key={faq.id}
                    value={`item-${index}`}
                    className="border-primary/50 py-0 min-[500px]:py-2"
                >
                    <AccordionTrigger className="text-base leading-7 font-bold hover:no-underline **:data-[slot=accordion-trigger-icon]:size-6 **:data-[slot=accordion-trigger-icon]:text-primary min-[500px]:text-lg">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="leading-6 text-[#606060]">
                        {faq.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
