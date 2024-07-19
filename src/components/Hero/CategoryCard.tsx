import trademill from "../../assets/trademill.jpg";
const CategoryCard = () => {
    return (
        <div className="bg-white px-4 py-6 h-[200px] w-[200px] flex items-center justify-center flex-col space-y-6 border-2 border-[#ff525255] inline-flex mr-5 cursor-pointer">
            <div className="flex justify-center">
                <img src={trademill} alt="" className="w-[150px]" />
            </div>

            <div>
                <h2 className="font-medium text-center">Trademill</h2>
            </div>
        </div>
    );
};

export default CategoryCard;
