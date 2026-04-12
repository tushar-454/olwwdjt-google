import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
    className?: string;
    children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
    return (
        <main className={cn("container mx-auto p-4", className)}>
            {children}
        </main>
    );
}
