import SectionHead from "../common/section-head";
import ReviewsCards from "./reviews-cards";

export default function ClientReviews() {
    return (
        <section className="py-10" id="client-reviews">
            <SectionHead
                title="Check Our Clients"
                highlightedTitle="Review"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />

            {/* reviews grid content */}
            <ReviewsCards />
        </section>
    );
}
