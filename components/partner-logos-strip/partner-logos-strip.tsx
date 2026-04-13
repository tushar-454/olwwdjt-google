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
    return (
        <section className="py-10">
            <p className="text-center text-[20px] leading-normal font-semibold">
                Trusted by leaders in 50+ industries
            </p>
            <div className="mt-9 flex w-full flex-wrap items-center justify-evenly gap-15 bg-[#F6F6F6] px-5 py-10">
                {logos.map((logo, i) => (
                    <Image
                        key={i}
                        src={logo}
                        alt={`${logo.split("/").pop()?.split(".")[0]} logo`}
                        width={120}
                        height={60}
                        className="h-auto w-28 object-contain"
                    />
                ))}
            </div>
        </section>
    );
}
