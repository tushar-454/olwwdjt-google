import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "../ui/button";

type ScheduleMeetingBtnProps = {
    isMobile?: boolean;
};

export default function ScheduleMeetingBtn({
    isMobile = false,
}: ScheduleMeetingBtnProps) {
    return (
        <Link
            href={"#schedule-meeting"}
            className={
                isMobile ? "mt-5 inline-block lg:hidden" : "hidden lg:block"
            }
        >
            <Button className="flex h-12.5 items-center justify-center gap-2.5 rounded-[5px] px-4.5 py-6">
                <span className="text-center text-[14px] leading-[100%] font-bold text-white">
                    Schedule a Meeting
                </span>{" "}
                <ArrowRightIcon size={32} />
            </Button>
        </Link>
    );
}
