import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { TService } from "@/db/services";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function ServiceCard({ service }: { service: TService }) {
    return (
        <Card className="rounded-[13px] ring-primary/50">
            <CardContent className="flex flex-col gap-8">
                <div className="flex h-24 w-24 items-center justify-center">
                    <Image
                        src={service.image}
                        alt={service.title}
                        width={84}
                        height={84}
                        className="object-contain"
                    />
                </div>
                <div className="flex flex-col gap-3.5">
                    <h4 className="text-2xl leading-[125%] font-bold text-[#1E1E1E] sm:max-w-65">
                        {service.title}
                    </h4>
                    <p className="text-sm leading-normal font-medium">
                        {service.description}
                    </p>
                </div>
            </CardContent>
            <CardFooter>
                <Link href={service.slug}>
                    <Button
                        variant="outline"
                        className="w-full rounded-full border-primary px-5 text-primary"
                    >
                        Read More
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
