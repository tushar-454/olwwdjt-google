import Image from "next/image";
import Container from "../common/container";
import { Button } from "../ui/button";

export default function GetInTouch() {
    return (
        <section data-aos="zoom-in" className="py-10" id="get-in-touch">
            <Container className="flex max-w-3xl flex-col items-center justify-center gap-7">
                {/* group avatar  */}
                <div className="flex items-center justify-center -space-x-3">
                    <Image
                        src="/assets/groupavatar1.png"
                        width={100}
                        height={100}
                        alt="Group Avatar 1"
                        className="w-12"
                    />
                    <Image
                        src="/assets/groupavatar2.png"
                        width={100}
                        height={100}
                        alt="Group Avatar 2"
                        className="z-50 mb-3 w-16"
                    />
                    <Image
                        src="/assets/groupavatar3.png"
                        width={100}
                        height={100}
                        alt="Group Avatar 3"
                        className="w-12"
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5">
                    <h4 className="text-center text-xl leading-7.5 font-bold">
                        Still have Question
                    </h4>
                    <p className="text-center text-lg leading-7 text-[#9C9C9C]">
                        Can&apos;t find the answer you&apos;re looking for?
                        Please chat to our friendly team.
                    </p>
                </div>
                <Button className="mx-auto px-6 py-5">Get in touch</Button>
            </Container>
        </section>
    );
}
