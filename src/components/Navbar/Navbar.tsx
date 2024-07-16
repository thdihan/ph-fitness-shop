import Logo from "./Logo";
import Header from "./Header";
import Navigation from "./Navigation";

const Navbar = () => {
    return (
        <div className="bg-white">
            <div className="flex justify-between items-center py-4 border-b-2 border-grey-300 px-16">
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
