import Hero from "@/components/hero/hero";
import PartnerLogosStrip from "@/components/partner-logos-strip/partner-logos-strip";
import Pricing from "@/components/pricing/pricing";
import Services from "@/components/services/services";

export default async function Page({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const { unit } = await searchParams;

    return (
        <main>
            <Hero />
            <PartnerLogosStrip />
            <Services />
            <Pricing isYearly={unit === "yearly"} />
        </main>
    );
}
