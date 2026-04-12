import Logo from "../header/logo";
import MobileMenu from "../header/mobile-menu";
import NavItems from "../header/nav-items";
import ScheduleMeetingBtn from "../header/schedule-meeting-btn";
import Container from "./container";

export default function Header() {
    return (
        <header className="bg-background shadow-[0_4px_62px_0_rgba(250,196,210,0.63)] dark:shadow-[0_8px_36px_0_rgba(0,0,0,0.55)]">
            <Container className="flex max-w-360 items-center justify-between">
                {/* logo  */}
                <Logo />
                {/* side menu (sheets) for mobile devices */}
                <MobileMenu />
                {/* nav items  */}
                <NavItems />
                {/* CTA  */}
                <ScheduleMeetingBtn />
            </Container>
        </header>
    );
}
