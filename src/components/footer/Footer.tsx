import Logo from "../../assets/logo-text.png"

const Footer = () => {
    return (
        <div className="container mx-auto text-xs text-[#64748B] px-2 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2 justify-between">
                <div className="space-y-4 col-span-2 w-10/12 pb-5 md:pb-0">
                    <img src={Logo} alt="" />
                    <p>Curated tools, technologies, and resources for developers building
                        modern software.</p>
                    <div className="flex items-center gap-4">
                        <a target="_blank" href="https://github.com" className="text-[#475569] font-semibold">Github</a>
                        <a target="_blank" href="https://twitter.com" className="text-[#475569] font-semibold">Twitter</a>
                        <a target="_blank" href="https://linkedin.com" className="text-[#475569] font-semibold">Linkedin</a>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2 className="text-[#0F172A] font-bold">PRODUCT</h2>
                    <p>Home</p>
                    <p>Technologies</p>
                    <p>Projects</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-[#0F172A] font-bold">COMPANY</h2>
                    <p>About</p>
                    <p>Contact</p>
                    <p>Careers</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-[#0F172A] font-bold">LEGAL</h2>
                    <p>Privacy Policy</p>
                    <p>Teams of service</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between mb-10">
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <div className="flex gap-3">
                    <p>Privacy</p>
                    <p>Terms</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;