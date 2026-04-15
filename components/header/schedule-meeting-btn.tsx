import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "../ui/button";

type ScheduleMeetingBtnProps = {
    isMobile?: boolean;
    showAlways?: boolean;
};

export default function ScheduleMeetingBtn({
    isMobile = false,
    showAlways = false,
}: ScheduleMeetingBtnProps) {
    return (
        <Button
            asChild
            className="flex h-12.5 items-center justify-center gap-2.5 rounded-[5px] px-4.5 py-6"
        >
            <Link
                href={"#schedule-meeting"}
                className={cn(
                    isMobile
                        ? "mt-5 inline-block lg:hidden"
                        : "hidden lg:block",
                    showAlways && "inline-block"
                )}
            >
                <span className="text-center text-[14px] leading-[100%] font-bold text-white">
                    Schedule a Meeting
                </span>{" "}
                <ArrowRightIcon size={32} />
            </Link>
        </Button>
    );
}
