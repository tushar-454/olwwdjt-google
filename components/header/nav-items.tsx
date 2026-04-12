import { cn } from "@/lib/utils";
import NavItem from "./nav-item";

export type TNavItem = {
    id: number;
    name: string;
    href: string;
};

const navItems: TNavItem[] = [
    {
        id: 1,
        name: "Home",
        href: "/",
    },
    {
        id: 2,
        name: "About",
        href: "#about",
    },
    {
        id: 3,
        name: "Services",
        href: "#services",
    },
    {
        id: 4,
        name: "Pricing",
        href: "#pricing",
    },
    {
        id: 5,
        name: "Blog",
        href: "#blog",
    },
    {
        id: 6,
        name: "Resources",
        href: "#resources",
    },
];

type NavItemsProps = {
    isMobile?: boolean;
};

export default function NavItems({ isMobile = false }: NavItemsProps) {
    return (
        <nav>
            <ul
                className={cn(
                    "flex gap-6",
                    isMobile ? "flex-col" : "hidden items-center lg:flex"
                )}
            >
                {navItems.map((item) => (
                    <NavItem key={item.id} item={item} />
                ))}
            </ul>
        </nav>
    );
}
