import { services } from "@/db/services";
import Container from "../common/container";
import SectionHead from "../common/section-head";
import ServiceCard from "./service-card";

export default function Services() {
    return (
        <section className="py-10" id="services">
            <Container className="max-w-310">
                <SectionHead
                    title="Our"
                    highlightedTitle="Services"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />

                {/* services grid content */}
                <div className="mt-13.5 grid grid-cols-1 gap-6.25 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            index={index}
                            service={service}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
