import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import heroImg from "../../assets/fitness-shop.png";
import CategoryCard from "./CategoryCard";
import { useRef } from "react";
import { useGetAllCategoriesQuery } from "../../redux/api/baseApi";
import { Button } from "antd";
import { ButtonPrimary } from "../Buttons/Buttons";

const Hero = () => {
    const { data: categories } = useGetAllCategoriesQuery(undefined);
    const scrollRef = useRef(null);
    const onClickScroll = (dir: number) => {
        console.log(scrollRef.current);

        scrollRef.current.scrollLeft += 220 * dir;
    };
    return (
        <div className="">
            <div className="flex justify-between space-x-4 py-2  px-4 md:px-8 lg:px-28 bg-[#efeeee]">
                <img src={heroImg} alt="" className="w-[50%]" />
                <div className="flex flex-col justify-center items-end space-y-2">
                    <h2 className="text-6xl font-semibold text-end text-gray-800">
                        Best Fitness Shop <br /> in Town
                    </h2>
                    <p className="text-end pb-12">
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
                        className="absolute top-[45%] -left-4 z-50 bg-[#FF5252] text-white text-xl p-1 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => onClickScroll(-1)}
                    >
                        <BiLeftArrow className="mr-1" />
                    </div>
                    <div
                        ref={scrollRef}
                        className="py-6 whitespace-nowrap overflow-hidden scroll-smooth "
                    >
                        {categories?.data?.map((category) => (
                            <CategoryCard
                                key={category.id}
                                category={category}
                            />
                        ))}
                        {/* <CategoryCard /> */}
                    </div>
                    <div
                        className="absolute top-[45%] -right-4 z-50 bg-[#FF5252] text-white text-xl p-1 rounded-full flex justify-center items-center cursor-pointer"
                        onClick={() => onClickScroll(1)}
                    >
                        <BiRightArrow className="ml-1" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
