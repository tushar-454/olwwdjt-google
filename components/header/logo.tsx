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
                className="aspect-25/9"
            />
        </Link>
    );
}
