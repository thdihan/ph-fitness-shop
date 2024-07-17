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
    return (
        <nav className="">
            <ul className="flex justify-center">
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
