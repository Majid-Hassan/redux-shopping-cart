import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const footerLinks = [
        {
            title: "Company",
            links: ["About", "Careers", "Brand Center", "Blog"]
        },
        {
            title: "Help center",
            links: ["Discord Server", "Twitter", "Facebook", "Contact Us"]
        },
        {
            title: "Legal",
            links: ["Privacy Policy", "Licensing", "Terms"]
        },
        {
            title: "Download",
            links: ["iOS", "Android", "Windows", "MacOS"]
        }
    ];

    return (
        <footer className="bg-white dark:bg-gray-900 mt-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
                                {section.title}
                            </h3>
                            <ul className="mt-4 space-y-4">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-base text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex space-x-6 md:order-2">
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <FaFacebook className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <FaTwitter className="h-6 w-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                        </div>
                        <div className="mt-8 md:mt-0 md:order-1">
                            <p className="text-center text-base text-gray-400">
                                © 2025 All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer