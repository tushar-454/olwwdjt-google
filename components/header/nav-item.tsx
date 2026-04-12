"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TNavItem } from "./nav-items";

type NavItemProps = {
    item: TNavItem;
};

export default function NavItem({ item }: NavItemProps) {
    const pathname = usePathname();
    const isActive = pathname === item.href;

    return (
        <li key={item.href}>
            <Link
                href={item.href}
                className={cn(
                    isActive
                        ? "font-bold text-primary underline underline-offset-8"
                        : "font-normal text-[#1E1E1E] dark:text-[#707070]",
                    "text-[18px] leading-[150%] transition-colors duration-100 hover:text-primary/90"
                )}
            >
                {item.name}
            </Link>
        </li>
    );
}
