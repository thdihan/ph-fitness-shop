import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div>
            <Link to="/" className="text-4xl font-extrabold tracking-wide">
                <span className="text-[#FF5252]">Fitness</span> Shop
            </Link>
        </div>
    );
};

export default Logo;
