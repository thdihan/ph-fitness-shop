import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import heroImg from "../../assets/fitness-shop.png";
import CategoryCard from "./CategoryCard";
import { useRef } from "react";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";
import { ButtonPrimary } from "../Buttons/Buttons";
import { TCategory } from "../../types";

const Hero = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined);
    const scrollRef = useRef(null);
    const onClickScroll = (dir: number) => {
        console.log(scrollRef.current);

        if (scrollRef.current !== null)
            (scrollRef.current as HTMLDivElement).scrollLeft += 220 * dir * 2;
    };
    return (
        <div className="">
            <div className="flex flex-col lg:flex-row item-center justify-between space-x-4 py-2  px-4 md:px-8 lg:px-28 bg-[#efeeee]">
                <img src={heroImg} alt="" className="w-full lg:w-[50%]" />
                <div className="flex flex-col justify-center lg:items-end space-y-2">
                    <h2 className="text-4xl lg:text-6xl font-semibold text-center lg:text-end  text-gray-800">
                        Best Fitness Shop <br /> in Town
                    </h2>
                    <p className="text-center lg:text-end pb-12">
                        Buy the best fitness equipment and accessories from our
                        store. <br /> We have a wide range of products to help
                        you achieve your fitness goals. <br /> Start shopping
                        now
                    </p>
                    <ButtonPrimary text="Start Shopping" to="/all-products" />
                </div>
            </div>

            <div className=" px-4 md:px-8 lg:px-28 bg-[#292D33]">
                <div id="category-section" className="relative w-full ">
                    <div
                        className="absolute top-[45%] -left-4 z-50 bg-[#FF5252] text-white text-xl px-1.5 py-2 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => onClickScroll(-1)}
                    >
                        <BiSolidLeftArrow className="mr-1 text-sm" />
                    </div>
                    <div
                        ref={scrollRef}
                        className="py-6 whitespace-nowrap overflow-hidden scroll-smooth"
                    >
                        {categories?.data?.map((category: TCategory) => (
                            <CategoryCard
                                key={category._id}
                                category={category}
                            />
                        ))}
                        {/* <CategoryCard /> */}
                    </div>
                    <div
                        className="absolute top-[45%] -right-4 z-50 bg-[#FF5252] text-white text-sm px-1.5 py-2 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => onClickScroll(1)}
                    >
                        <BiSolidRightArrow className="ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
