import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "../ui/button";

type ScheduleMeetingBtnProps = {
    className?: string;
};

export default function ScheduleMeetingBtn({
    className,
}: ScheduleMeetingBtnProps) {
    return (
        <Button
            asChild
            className={cn("h-12.5 rounded-[5px] px-4.5 py-6", className)}
        >
            <Link
                href={"#schedule-meeting"}
                className="inline-flex items-center justify-center gap-2.5"
            >
                <span className="text-center text-[14px] leading-[100%] font-bold text-white">
                    Schedule a Meeting
                </span>{" "}
                <ArrowRightIcon size={32} />
            </Link>
        </Button>
    );
}
