import Image from "next/image";

const logos = [
    "/assets/airbnb.svg",
    "/assets/booking.svg",
    "/assets/vrbo.svg",
    "/assets/tripadviso.svg",
    "/assets/agoda.svg",
    "/assets/expedia.svg",
    "/assets/hometogo.svg",
];

export default function PartnerLogosStrip() {
    const loopedLogos = [...logos, ...logos];

    return (
        <section className="py-10">
            <p
                data-aos="fade-down"
                className="text-center text-[20px] leading-normal font-semibold"
            >
                Trusted by leaders in 50+ industries
            </p>
            <div
                data-aos="fade-up"
                className="relative mt-9 overflow-hidden bg-[#F6F6F6] py-10"
            >
                <div className="logo-marquee-track flex w-max items-center gap-12 px-5">
                    {loopedLogos.map((logo, i) => (
                        <div
                            key={`${logo}-${i}`}
                            className="flex min-w-36 shrink-0 items-center justify-center"
                        >
                            <Image
                                src={logo}
                                alt={`${logo.split("/").pop()?.split(".")[0]} logo`}
                                width={120}
                                height={60}
                                className="h-auto w-28 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
