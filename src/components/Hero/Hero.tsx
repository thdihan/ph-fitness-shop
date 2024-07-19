import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import heroImg from "../../assets/hero1.jpg";
import CategoryCard from "./CategoryCard";
import { useRef } from "react";

const Hero = () => {
    const scrollRef = useRef(null);
    const onClickScroll = (dir: number) => {
        console.log(scrollRef.current);

        scrollRef.current.scrollLeft += 220 * dir;
    };
    return (
        <div className="px-8 lg:px-16 py-8 bg-[#F5F0F0]">
            <div>
                <img src={heroImg} alt="" />
            </div>

            <div className="relative  w-full">
                <div
                    className="absolute top-[45%] -left-4 z-50 bg-[#FF5252] text-white text-xl p-1 rounded-full flex justify-center items-center cursor-pointer"
                    onClick={() => onClickScroll(-1)}
                >
                    <BiLeftArrow className="mr-1" />
                </div>
                <div
                    ref={scrollRef}
                    className="py-6 whitespace-nowrap overflow-hidden scroll-smooth "
                >
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                    <CategoryCard />
                </div>
                <div
                    className="absolute top-[45%] -right-4 z-50 bg-[#FF5252] text-white text-xl p-1 rounded-full flex justify-center items-center cursor-pointer"
                    onClick={() => onClickScroll(1)}
                >
                    <BiRightArrow className="ml-1" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
