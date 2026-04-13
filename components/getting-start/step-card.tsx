import type { TGettingStartStep } from "@/db/getting-start";
import Image from "next/image";

type StepCardProps = { step: TGettingStartStep; index: number };

export default function StepCard({ step, index }: StepCardProps) {
    return (
        <div className="relative">
            <span className="absolute -top-5 -left-5 inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary bg-white text-[30px] leading-normal font-medium">
                0{++index}
            </span>

            <div className="grid h-48 items-center justify-center rounded-[9px] border p-10">
                <Image
                    src={step.image}
                    alt={step.instruction}
                    width={64}
                    height={64}
                />
            </div>
            <p className="mx-auto mt-5 max-w-63.75 text-center text-xl leading-normal font-semibold">
                {step.instruction}
            </p>
        </div>
    );
}
