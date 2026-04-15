import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href={"/"}>
            <Image
                src={"/assets/googlelogo.png"}
                alt={"logo"}
                width={125}
                height={45}
                priority
                sizes="125px"
                className="aspect-25/9"
            />
        </Link>
    );
}
