const menuItems = [
    {
        name: "Home",
    },
    {
        name: "Featured Products",
    },
    {
        name: "All Products",
    },
    {
        name: "Categories",
    },
    {
        name: "Benefits",
    },
    {
        name: "Gallery",
    },
    {
        name: "About",
    },
    {
        name: "Contact",
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
                        <a href="#" className="text-md font-medium">
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
