import Image from "next/image";

export default function FloatingItems() {
    return (
        <div className="hidden lg:block">
            {/* airbnb logo  */}
            <Image
                src="/assets/airbnb.png"
                alt="airbnb logo"
                width={80}
                height={80}
                priority
                sizes="80px"
                className="shake-bottom absolute top-10 left-0"
            />
            {/* virbo logo  */}
            <Image
                src="/assets/virbo.png"
                alt="virbo logo"
                width={80}
                height={80}
                priority
                sizes="80px"
                className="shake-up absolute bottom-20 left-0"
            />
            {/* booking logo  */}
            <Image
                src="/assets/b.png"
                alt="booking logo"
                width={80}
                height={80}
                priority
                sizes="80px"
                className="shake-up absolute top-10 right-0"
            />
            {/* tripadvison logo */}
            <Image
                src="/assets/tripadvison.png"
                alt="tripadvison logo"
                width={80}
                height={80}
                priority
                sizes="80px"
                className="shake-bottom absolute right-0 bottom-20"
            />

            {/* lefts dots  */}
            <span className="absolute top-10 -left-32 inline-block h-3.25 w-3.25 animate-pulse rounded-full bg-[#635BFF] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#635BFF]/70"></span>
            <span className="absolute top-1/2 -left-10 inline-block h-3.25 w-3.25 animate-pulse rounded-full bg-[#FF5A5F] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#FF5A5F]/70"></span>
            <span className="absolute bottom-24 -left-32 inline-block h-1.75 w-1.75 animate-pulse rounded-full bg-[#FFEC5A] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#FFEC5A]/70"></span>

            {/* center dots  */}
            <span className="absolute top-0 left-1/2 inline-block h-3.75 w-3.75 animate-pulse rounded-full bg-[#34E0A1] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#34E0A1]/70"></span>
            <span className="absolute bottom-4 left-1/2 inline-block h-3.25 w-3.25 animate-pulse rounded-full bg-[#5AF9FF] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#5AF9FF]/70"></span>

            {/* right dots  */}
            <span className="absolute top-32 -right-20 inline-block h-3.25 w-3.25 animate-pulse rounded-full bg-[#FFEC5A] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#FFEC5A]/70"></span>
            <span className="absolute -right-40 bottom-32 inline-block h-1.75 w-1.75 animate-pulse rounded-full bg-[#0C3B7C] shadow-[inset_0_-2px_6.3px_0_rgba(0,0,0,0.25)] dark:bg-[#0C3B7C]/70"></span>
        </div>
    );
}
