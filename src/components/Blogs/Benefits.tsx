import dumbeell from "../../assets/dumbbell.png";
import benefit1 from "../../assets/benefit1.jpg";
const Benefits = () => {
    return (
        <div className="bg-[#292D33] p-10">
            <div className="py-5">
                <h2 className="text-center font-bold text-white text-4xl">
                    Benefits of Exercise
                </h2>
            </div>
            <div className="px-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 min-h-[300px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={dumbeell} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">FIT BODY</h1>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum ad magnam animi facilis maiores
                            laudantium quidem corrupti itaque architecto
                            tenetur.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={benefit1} alt="" className="w-full h-full" />
                </div>
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 min-h-[300px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={dumbeell} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">FIT BODY</h1>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum ad magnam animi facilis maiores
                            laudantium quidem corrupti itaque architecto
                            tenetur.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={benefit1} alt="" className="w-full h-full" />
                </div>
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 min-h-[300px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={dumbeell} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">FIT BODY</h1>
                        <p className="text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nostrum ad magnam animi facilis maiores
                            laudantium quidem corrupti itaque architecto
                            tenetur.
                        </p>
                    </div>
                </div>
                <div className="">
                    <img src={benefit1} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
