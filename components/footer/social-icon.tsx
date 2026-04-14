import Image from "next/image";
import Link from "next/link";

const socialIcons = [
    {
        src: "/assets/twitter.png",
        alt: "twitter",
        href: "#",
    },
    {
        src: "/assets/facebook.png",
        alt: "facebook",
        href: "#",
    },
    {
        src: "/assets/instagram.png",
        alt: "instagram",
        href: "#",
    },
    {
        src: "/assets/github.png",
        alt: "github",
        href: "#",
    },
];

export default function SocialIcon() {
    return (
        <div className="flex items-center gap-8">
            {socialIcons.map((icon) => (
                <Link
                    key={icon.src}
                    href={icon.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={24}
                        height={24}
                        className="h-5 w-5 cursor-pointer object-contain dark:invert"
                    />
                </Link>
            ))}
        </div>
    );
}
