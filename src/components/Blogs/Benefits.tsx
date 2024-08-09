import benefit1 from "../../assets/benefit1.jpg";
import muscle from "../../assets/muscle.png";
import healthcare from "../../assets/healthcare.png";
import slimCare from "../../assets/slim-body.png";
import dfs from "../../assets/dfs.jpg";
import gr from "../../assets/gr.jpg";
const Benefits = () => {
    return (
        <div id="benefits-section" className="bg-[#292D33] p-10">
            <div className="py-5">
                <h2 className="text-center font-bold text-white text-4xl">
                    Benefits of Exercise
                </h2>
            </div>
            <div className="px-4 md:px-8 lg:px-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 h-[400px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={muscle} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">
                            Gain Strength
                        </h1>
                        <p className="text-gray-500">
                            Regular exercise is one of the most effective ways
                            to build and maintain physical strength. Engaging in
                            activities like weightlifting, resistance training,
                            or bodyweight exercises helps develop muscle mass
                            and enhances overall power. As muscles grow
                            stronger, daily tasks become easier, and the risk of
                            injury decreases.
                        </p>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img src={benefit1} alt="" className="w-full h-full" />
                </div>
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 h-[400px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={healthcare} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">
                            Good Mental Health
                        </h1>
                        <p className="text-gray-500">
                            Exercise is a powerful tool for improving mental
                            well-being. Physical activity triggers the release
                            of endorphins, which are natural mood elevators. It
                            also helps reduce stress, anxiety, and symptoms of
                            depression. Regular exercise can lead to better
                            sleep, increased self-esteem, and a more positive
                            outlook on life.
                        </p>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img src={gr} alt="" className="w-full h-full" />
                </div>
                <div className="bg-white p-8 flex justify-center items-center flex-col space-y-6 h-[400px]">
                    <div className="flex justify-center bg-gray-300 w-[100px] p-5 rounded-full">
                        <img src={slimCare} alt="" />
                    </div>
                    <div className="text-center space-y-4">
                        <h1 className="font-extralight text-3xl">
                            Less Body Fat
                        </h1>
                        <p className="text-gray-500">
                            Incorporating exercise into your routine is
                            essential for managing body fat. Activities like
                            cardio, high-intensity interval training (HIIT), and
                            strength training help burn calories and improve
                            metabolism. Over time, consistent exercise can
                            reduce body fat, leading to a healthier weight,
                            better cardiovascular health, and a decreased risk
                            of chronic diseases.
                        </p>
                    </div>
                </div>
                <div className="h-[400px]">
                    <img src={dfs} alt="" className="w-full h-full" />
                </div>
            </div>
        </div>
    );
};

export default Benefits;
