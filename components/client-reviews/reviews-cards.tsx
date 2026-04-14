import { reviews } from "@/db/reviews";
import Container from "../common/container";
import ReviewsCard from "./reviews-card";

export default function ReviewsCards() {
    return (
        <div className="mt-13.5">
            <Container className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {reviews.map((review, index) => (
                    <ReviewsCard
                        key={review.id}
                        index={index}
                        review={review}
                    />
                ))}
            </Container>
        </div>
    );
}
