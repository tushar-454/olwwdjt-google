"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import * as React from "react";
import { useEffect } from "react";
import CustomCursor from "./common/custom-cursor";
import SmoothScroll from "./common/smooth-scroll";

function ThemeProvider({
    children,
    ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
    useEffect(() => {
        AOS.init({
            // disable: "mobile",
            offset: 150,
            duration: 600,
            easing: "ease-in-sine",
            once: true,
        });
    }, []);
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
            {...props}
        >
            <ThemeHotkey />
            {children}
            <SmoothScroll />
            <CustomCursor />
        </NextThemesProvider>
    );
}

function isTypingTarget(target: EventTarget | null) {
    if (!(target instanceof HTMLElement)) {
        return false;
    }

    return (
        target.isContentEditable ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT"
    );
}

function ThemeHotkey() {
    const { resolvedTheme, setTheme } = useTheme();

    React.useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.defaultPrevented || event.repeat) {
                return;
            }

            if (event.metaKey || event.ctrlKey || event.altKey) {
                return;
            }

            if (event.key.toLowerCase() !== "d") {
                return;
            }

            if (isTypingTarget(event.target)) {
                return;
            }

            setTheme(resolvedTheme === "dark" ? "light" : "dark");
        }

        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [resolvedTheme, setTheme]);

    return null;
}

export { ThemeProvider };
