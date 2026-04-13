import Link from "next/link";
import Container from "../common/container";
import ScheduleMeetingBtn from "../header/schedule-meeting-btn";
import FloatingItems from "./floating-items";

export default function Hero() {
    return (
        <section className="flex h-145 items-end justify-center bg-[url('/assets/herobg.png')] bg-cover bg-center">
            <Container className="relative max-w-230.75 rounded-[923px] bg-[rgba(255,255,255,0.62)] py-16 dark:bg-[rgba(255,255,255,0.05)]">
                {/* floating items (logo, dot) */}
                <FloatingItems />
                <div className="flex flex-col items-center gap-8">
                    <h1 className="flex flex-col items-center text-center text-[48px] leading-[130.187%] font-bold">
                        Airbnb Assistants For{" "}
                        <span className="text-[38.125px] font-medium">
                            {" "}
                            Property Management
                        </span>
                    </h1>
                    <p className="max-w-166.25 text-center text-sm leading-normal font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                    </p>
                    <ScheduleMeetingBtn />
                    <Link
                        href="#pricing"
                        className="text-center text-sm font-medium underline underline-offset-2"
                    >
                        See Pricing
                    </Link>
                </div>
            </Container>
        </section>
    );
}
