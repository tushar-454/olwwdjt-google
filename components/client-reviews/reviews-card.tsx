import type { TReviewCard } from "@/db/reviews";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import RatingStars from "./rating-stars";

export default function ReviewsCard({ review }: { review: TReviewCard }) {
    return (
        <Card
            className={cn(
                "rounded-[11px] ring-[#F6F6F6] transition-shadow hover:shadow-[0_4px_77.4px_0_rgba(136,136,136,0.41)]"
            )}
        >
            <CardContent className="flex flex-col gap-5 md:flex-row md:items-center">
                <Image
                    src={review.image}
                    alt={review.name}
                    width={200}
                    height={200}
                    className="w-24 rounded-full md:w-60"
                />
                <div className="flex flex-col gap-1.5">
                    <h4 className="text-xl leading-normal font-bold">
                        {review.name}
                    </h4>
                    <p className="text-sm leading-normal font-medium">
                        {review.comment}
                    </p>
                    <RatingStars rating={review.rating} />
                </div>
            </CardContent>
        </Card>
    );
}
