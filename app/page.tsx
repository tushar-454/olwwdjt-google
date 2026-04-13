import ChooseUs from "@/components/chooseus/chooseus";
import GettingStart from "@/components/getting-start/getting-start";
import Hero from "@/components/hero/hero";
import PartnerLogosStrip from "@/components/partner-logos-strip/partner-logos-strip";
import Pricing from "@/components/pricing/pricing";
import Services from "@/components/services/services";
import Tools from "@/components/tools/tools";

export default async function Page() {
    return (
        <main>
            <Hero />
            <PartnerLogosStrip />
            <Services />
            <Pricing />
            <Tools />
            <GettingStart />
            <ChooseUs />
        </main>
    );
}
