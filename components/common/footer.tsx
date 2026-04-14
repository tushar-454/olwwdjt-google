import FooterColumns from "../footer/footer-columns";
import SocialIcon from "../footer/social-icon";
import Logo from "../header/logo";
import Container from "./container";

export default function Footer() {
    return (
        <footer>
            <Container className="grid max-w-360 grid-cols-1 gap-10 pt-32 pb-14 md:grid-cols-5">
                {/* left side  */}
                <div className="col-span-2">
                    <Logo />
                    <p className="my-5 text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam dictum aliquet accumsan porta lectus ridiculus in
                        mattis. Netus sodales in volutpat ullamcorper amet
                        adipiscing fermentum.
                    </p>
                    <SocialIcon />
                </div>
                {/* right side column  */}
                <FooterColumns />
            </Container>
            {/* bottom footer copyright  */}
            <div className="bg-[#230B41] p-6 text-center text-sm leading-5.5 text-white">
                © Copyright 2026, All Rights Reserved by OLW
            </div>
        </footer>
    );
}
