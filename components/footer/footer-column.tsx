import { FooterColumns, footerColumnsData } from "@/db/footer";
import Link from "next/link";

export default function FooterColumn({ column }: { column: FooterColumns }) {
    return (
        <div className="justify-self-center">
            <h4 className="leading-6 font-bold text-gray-900">{column}</h4>
            <ul className="mt-5">
                {footerColumnsData[column].map((link) => (
                    <li
                        key={link.label}
                        className="text-sm leading-10 font-medium"
                    >
                        <Link
                            href={link.href}
                            className="leading-6 text-gray-900 hover:text-gray-950"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
