import { useState } from "react";
import Calendar from "react-calendar";
import { navItems } from "../Navbar/navItems";
import { Link } from "react-router-dom";

const navigation = [
    { name: "Home", href: "#", current: true, subMenu: [] },
    { name: "About", href: "#", current: false, subMenu: [] },
    {
        name: "Key Stage 1",
        href: "#",
        current: false,
        subMenu: [
            { name: "Maths", href: "#", current: false },
            { name: "English", href: "#", current: false },
            { name: "Science", href: "#", current: false },
        ],
    },
    {
        name: "Key Stage 2",
        href: "#",
        current: false,
        subMenu: [
            { name: "Maths", href: "#", current: false },
            { name: "English", href: "#", current: false },
            { name: "Science", href: "#", current: false },
        ],
    },
    {
        name: "AS/A Level",
        href: "#",
        current: false,
        subMenu: [
            { name: "Maths", href: "#", current: false },
            { name: "English", href: "#", current: false },
            { name: "Science", href: "#", current: false },
        ],
    },
    {
        name: "GSCE/IGCSE",
        href: "#",
        current: false,
        subMenu: [
            { name: "Maths", href: "#", current: false },
            { name: "English", href: "#", current: false },
            { name: "Science", href: "#", current: false },
        ],
    },
    { name: "Contact", href: "#", current: false },
];
const Footer = () => {
    const [value, setValue] = useState(new Date());
    return (
        <div className="bg-black">
            <div className="container mx-auto flex w-full flex-col lg:items-center space-y-10 p-10 lg:text-left lg:max-w-[1200px] lg:flex-row lg:justify-between lg:space-x-16 lg:space-y-0">
                <div className="flex-1 space-y-5 text-white text-center">
                    <h2 className="text-2xl font-semibold lg:text-left">
                        Fitness Shop
                    </h2>
                    <address className="text-center lg:text-left">
                        Apt. 955 118 Abbott Shore, <br /> New Berniece, HI{" "}
                        <br />
                        34986-8246
                    </address>
                </div>

                <div className="flex flex-1 justify-center">
                    <ul className="text-center">
                        {navItems.map((nav, index) => (
                            <li key={index}>
                                <Link
                                    to={nav?.path}
                                    className="block py-1 text-white"
                                >
                                    {nav.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex-1">
                    <Calendar value={value} className={`text-white`} />
                </div>
            </div>
        </div>
    );
};

export default Footer;
