import { pricingFeatures, type TPricingType } from "@/db/pricing";
import { cn } from "@/lib/utils";
import CheckIcon from "./check-icon";
import CrossIcon from "./cross-icon";

type FeaturesListsProps = {
    type: TPricingType;
    isHighlighted?: boolean;
};

export default function FeaturesLists({
    type,
    isHighlighted = false,
}: FeaturesListsProps) {
    return (
        <ul className="mt-6 space-y-3">
            {pricingFeatures.map((feature) => (
                <li
                    key={feature.id}
                    className={cn(
                        "flex items-center gap-2",
                        isHighlighted
                            ? "text-neutral-50"
                            : "text-neutral-500 dark:text-neutral-200"
                    )}
                >
                    {feature.availableIn.includes(type) ? (
                        <CheckIcon />
                    ) : (
                        <CrossIcon isHighlighted={isHighlighted} />
                    )}

                    {feature.name}
                </li>
            ))}
        </ul>
    );
}
