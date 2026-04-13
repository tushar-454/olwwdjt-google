import { pricingPlans } from "@/db/pricing";
import PricingCard from "./pricing-card";

export default async function PricingCards({
    isYearly,
}: {
    isYearly: boolean;
}) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan) => (
                <PricingCard key={plan.id} plan={plan} isYearly={isYearly} />
            ))}
        </div>
    );
}
