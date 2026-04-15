import Image from "next/image";
import Container from "../common/container";
import ScheduleMeetingBtn from "../header/schedule-meeting-btn";
import CheckIcon from "../pricing/check-icon";

const facilities = [
    "Brilliant Client Service",
    "Flexibility & Adaptibility",
    "We make it Personal",
    "We have expart in our team",
];

export default function ChooseUs() {
    return (
        <section data-aos="fade-up" className="py-10" id="chooseus">
            <Container className="grid max-w-310 grid-cols-1 gap-6.25 rounded-[33px] bg-primary/20 px-5 py-11 md:grid-cols-2 md:gap-20 lg:grid-cols-5">
                {/* left part  */}
                <div className="space-y-7 md:self-center md:pl-11 lg:col-span-2">
                    <h2 className="text-4xl leading-tight font-bold">
                        Few Reasons Why you Choose us?
                    </h2>
                    <p className="text-sm leading-normal font-semibold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation
                    </p>
                    <ul className="flex flex-col gap-3">
                        {facilities.map((facility, index) => (
                            <li className="flex items-center gap-2" key={index}>
                                <CheckIcon />{" "}
                                <span className="text-base leading-normal font-semibold">
                                    {facility}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <ScheduleMeetingBtn showAlways />
                </div>
                {/* right part  */}
                <div className="md:self-center lg:col-span-3">
                    <Image
                        src={"/assets/chooseus.png"}
                        alt="choose us image"
                        width={400}
                        height={300}
                        className="h-auto w-full"
                    />
                </div>
            </Container>
        </section>
    );
}
