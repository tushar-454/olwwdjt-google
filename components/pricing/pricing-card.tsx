import { type TPricingPlan } from "@/db/pricing";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import FeaturesLists from "./features-lists";

type PricingCardProps = {
    plan: TPricingPlan;
    isYearly: boolean;
};

export default function PricingCard({ plan, isYearly }: PricingCardProps) {
    const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

    return (
        <Card
            data-aos="zoom-in-up"
            className={cn(
                "rounded-[10px] py-7 font-manrope ring-primary/50 dark:ring-primary/30",
                plan.isHighlighted ? "bg-primary" : ""
            )}
        >
            <CardHeader>
                <CardTitle
                    className={cn(
                        "text-[22px] leading-normal font-bold",
                        plan.isHighlighted
                            ? "text-white"
                            : "text-neutral-800 dark:text-neutral-50"
                    )}
                >
                    {plan.type}
                </CardTitle>
                <CardDescription
                    className={cn(
                        "text-base leading-normal font-normal",
                        plan.isHighlighted
                            ? "text-neutral-50"
                            : "text-neutral-500 dark:text-neutral-200"
                    )}
                >
                    {plan.description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                    <span
                        className={cn(
                            "text-[56px] leading-normal font-semibold",
                            plan.isHighlighted
                                ? "text-white"
                                : "text-neutral-800 dark:text-neutral-50"
                        )}
                    >
                        ${price}
                    </span>
                    <span
                        className={cn(
                            "text-base leading-normal font-light",
                            plan.isHighlighted
                                ? "text-neutral-50"
                                : "text-neutral-500 dark:text-neutral-200"
                        )}
                    >
                        / {isYearly ? "Year" : "Month"}
                    </span>
                </div>
                <Link
                    href={"#"}
                    className={cn(
                        "my-4 block w-full rounded-lg border border-primary py-2.5 text-center text-base leading-normal font-semibold text-primary dark:border-primary/50",
                        plan.isHighlighted
                            ? "bg-white"
                            : "bg-white dark:bg-white/5 dark:text-neutral-200"
                    )}
                >
                    {plan.ctaLabel}
                </Link>

                {/* features list */}
                <FeaturesLists
                    type={plan.type}
                    isHighlighted={plan.isHighlighted}
                />
            </CardContent>
        </Card>
    );
}
