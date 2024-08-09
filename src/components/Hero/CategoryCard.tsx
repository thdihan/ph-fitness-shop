import trademill from "../../assets/trademill.jpg";
const CategoryCard = ({ category }) => {
    return (
        <div className="bg-white px-4 py-6 h-[200px] w-[200px] flex items-center justify-center flex-col space-y-6 border-2 border-[#ff525255] inline-flex mr-5 cursor-pointer shadow-lg rounded-xl">
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
