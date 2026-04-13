import Link from "next/link";
import Container from "../common/container";
import ScheduleMeetingBtn from "../header/schedule-meeting-btn";
import FloatingItems from "./floating-items";

export default function Hero() {
    return (
        <section className="mb-20 flex h-132 items-end justify-center bg-[url('/assets/herobg.png')] bg-cover bg-center sm:h-145">
            <Container className="relative w-auto rounded-[923px] bg-[rgba(255,255,255,0.62)] py-16 lg:max-w-230.75 dark:bg-[rgba(255,255,255,0.05)]">
                {/* floating items (logo, dot) */}
                <FloatingItems />
                <div className="flex flex-col items-center gap-8">
                    <h1 className="flex flex-col items-center text-center text-2xl leading-[130.187%] font-bold min-[360px]:text-3xl sm:text-4xl md:text-[48px]">
                        Airbnb Assistants For{" "}
                        <span className="text-lg font-medium min-[360px]:text-2xl sm:text-3xl md:text-[38.125px]">
                            {" "}
                            Property Management
                        </span>
                    </h1>
                    <p className="w-auto text-center text-sm leading-normal font-medium md:max-w-166.25">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                    </p>
                    <ScheduleMeetingBtn showAlways />
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
