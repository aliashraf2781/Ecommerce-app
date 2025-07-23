import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#121B31] text-white px-6 py-10 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-3">Ali</h2>
                    <p className="text-sm text-gray-300">
                        Building smart & modern web apps for a better tomorrow.
                    </p>
                </section>

                <nav aria-label="Footer navigation">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Explore</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary transition">Home</a></li>
                        <li><a href="#" className="hover:text-primary transition">About</a></li>
                        <li><a href="#" className="hover:text-primary transition">Services</a></li>
                        <li><a href="#" className="hover:text-primary transition">Contact</a></li>
                    </ul>
                </nav>

                <nav aria-label="Legal links">
                    <h3 className="text-lg font-semibold mb-3 text-primary">Legal</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-primary transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-primary transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-primary transition">Cookies</a></li>
                    </ul>
                </nav>

                <address>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Get in Touch</h3>
                    <p className="text-sm text-gray-300">123 Tech Street, Mansoura, Egypt</p>
                    <p className="text-sm text-gray-300">+20 123 456 789</p>
                    <a href="mailto:info@yourbrand.com" className="text-sm hover:text-primary transition">info@yourbrand.com</a>
                </address>
            </div>

            <div className="text-center text-sm text-gray-400 mt-10">
                © {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
