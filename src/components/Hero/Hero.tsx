import heroImg from "../../assets/hero1.jpg";
import CategoryCard from "./CategoryCard";

const Hero = () => {
    return (
        <div className="px-16 py-8 bg-[#F5F0F0]">
            <div>
                <img src={heroImg} alt="" />
            </div>

            <div className="grid grid-cols-6 gap-6 py-6">
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
                <CategoryCard />
            </div>
        </div>
    );
};

export default Hero;
