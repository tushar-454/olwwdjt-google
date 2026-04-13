import Hero from "@/components/hero/hero";
import PartnerLogosStrip from "@/components/partner-logos-strip/partner-logos-strip";
import Pricing from "@/components/pricing/pricing";
import Services from "@/components/services/services";

export default async function Page() {
    return (
        <main>
            <Hero />
            <PartnerLogosStrip />
            <Services />
            <Pricing />
        </main>
    );
}
