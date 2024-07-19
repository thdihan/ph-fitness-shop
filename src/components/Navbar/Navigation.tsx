import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";

const menuItems = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Featured Products",
        path: "/all-products",
    },
    {
        name: "All Products",
        path: "/all-products",
    },
    {
        name: "Categories",
        path: "/all-products",
    },
    {
        name: "Benefits",
        path: "/all-products",
    },
    {
        name: "Gallery",
        path: "/all-products",
    },
    {
        name: "About",
        path: "/all-products",
    },
    {
        name: "Contact",
        path: "/all-products",
    },
];
const Navigation = () => {
    const [navOpen, setNavOpen] = useState(false);
    return (
        <nav className="">
            <div className="py-2 lg:hidden">
                <BiMenu
                    className="text-3xl cursor-pointer"
                    onClick={() => setNavOpen((prev) => !prev)}
                />
            </div>
            <ul
                className={`flex justify-center flex-col visible  lg:flex-row z-10 lg:z-0 relative ${
                    navOpen ? "lg:visible" : "hidden lg:block"
                }`}
            >
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className="inline-block px-6 py-3 hover:bg-[#FF5252] hover:text-white transition-all"
                    >
                        <Link to={item?.path} className="text-md font-medium">
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
