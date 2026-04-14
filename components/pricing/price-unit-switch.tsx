import { Switch } from "../ui/switch";

export default function PriceUnitSwitch({
    isYearly,
    setIsYearly,
}: {
    isYearly: boolean;
    setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    return (
        <div
            data-aos="fade-up"
            className="relative top-9.5 bottom-23.25 mx-auto mb-40 flex max-w-fit items-center justify-center gap-6 sm:mb-32"
        >
            <span>Pay Monthly</span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span>Pay Yearly</span>
            {/* arrow and discount text */}
            <div className="absolute top-5 right-0 sm:-top-5 sm:-right-32">
                <svg
                    width="107"
                    height="88"
                    viewBox="0 0 107 88"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform-[rotateY(180deg)_rotateZ(30deg)] sm:transform-none"
                >
                    <path
                        d="M95.4464 61.5975C83.1573 64.6612 68.4838 65.2433 57.6839 57.506C50.782 52.5614 47.1171 42.5628 49.6965 34.4472C52.1325 26.7826 57.8212 20.0482 66.3458 20.2535C70.789 20.3605 74.6202 22.4047 75.429 27.084C76.6648 34.2329 69.5331 41.6309 63.8629 44.7405C46.1673 54.4452 21.1341 53.9052 4.27689 42.6407"
                        style={{ stroke: "var(--primary)" }}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M11.7068 55.8448C9.64479 52.9635 5.14205 46.2418 3.62678 42.4055"
                        style={{ stroke: "var(--primary)" }}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    <path
                        d="M3.62686 42.4056C7.13951 41.9421 15.1239 40.6363 18.9602 39.121"
                        style={{ stroke: "var(--primary)" }}
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                </svg>
                <span className="absolute top-16.5 right-24 whitespace-nowrap text-primary sm:top-12 sm:-right-[60%]">
                    Save 25%
                </span>
            </div>
        </div>
    );
}
