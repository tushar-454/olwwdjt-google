import { footerColumns } from "@/db/footer";
import FooterColumn from "./footer-column";

export default function FooterColumns() {
    return (
        <div className="col-span-3 grid grid-cols-1 gap-10 min-[500px]:grid-cols-2 md:grid-cols-3">
            {footerColumns.map((column) => (
                <FooterColumn key={column} column={column} />
            ))}
        </div>
    );
}
