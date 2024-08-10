import { useNavigate } from "react-router-dom";
import trademill from "../../assets/trademill.jpg";
import { TCategory } from "../../types";
const CategoryCard = ({ category }: { category: TCategory }) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate(`/all-products/${category.name}`)}
            className="h-[200px] w-[200px] rounded-xl inline-flex flex-col justify-between py-4 align-middle mr-5 bg-white cursor-pointer"
        >
            <div className="flex justify-center">
                <img
                    src={category?.image || trademill}
                    alt=""
                    className="w-[150px]"
                />
            </div>

            <div className="">
                <h2 className="font-medium text-center text-sm w-full text-wrap">
                    {category.name}
                </h2>
            </div>
        </div>
    );
};

export default CategoryCard;
