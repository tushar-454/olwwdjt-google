"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [isInteractive, setIsInteractive] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });

            const target = e.target as Element | null;
            const interactiveEl = target?.closest(
                'a, button, [role="button"], input, textarea, select, [data-cursor="hover"]'
            );
            setIsInteractive(Boolean(interactiveEl));
        };

        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <Image
            src={
                isInteractive ? "/assets/cursor-p.png" : "/assets/cursor-n.png"
            }
            alt="Custom Cursor"
            width={32}
            height={32}
            className={`pointer-events-none fixed top-0 left-0 z-50`}
            style={{ transform: `translate(${pos.x - 6}px, ${pos.y - 6}px)` }}
        />
    );
}
