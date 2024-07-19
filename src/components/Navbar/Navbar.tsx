import Logo from "./Logo";
import Header from "./Header";
import Navigation from "./Navigation";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col lg:flex-row lg:justify-between items-center py-6 border-b-2 border-grey-300 px-16 lg:space-y-5 space-y-0">
                <Logo />
                <Header />
            </div>
            <div className="px-16 border-b-2 border-grey-300">
                <Navigation />
            </div>
        </div>
    );
};

export default Navbar;
