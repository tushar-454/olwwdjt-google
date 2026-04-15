import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import Logo from "./logo";
import NavItems from "./nav-items";
import ScheduleMeetingBtn from "./schedule-meeting-btn";

export default function MobileMenu() {
    return (
        <Sheet>
            <SheetTrigger className="ml-auto lg:hidden">
                <ListIcon
                    size={40}
                    className="rounded-lg bg-gray-100 p-2 dark:bg-gray-900"
                />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    <SheetDescription className="mt-5">
                        <NavItems isMobile />
                        <ScheduleMeetingBtn className="mt-5 inline-flex lg:hidden" />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
}
