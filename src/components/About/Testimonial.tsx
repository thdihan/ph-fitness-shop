import { Carousel } from "antd";

const testimonials = [
    {
        name: "Sarah M.",
        text: "I've been a loyal customer of Fitness Shop for over three years, and I can confidently say that their products have transformed my home gym. The quality of the equipment is top-notch, and their customer service is always responsive and helpful. Fitness Shop is my go-to for all my fitness needs!",
    },
    {
        name: "James R.",
        text: "Fitness Shop exceeded my expectations in every way. From the wide selection of equipment to the fast delivery, everything was seamless. I recently purchased a treadmill, and it's been a game-changer for my cardio routine. I highly recommend Fitness Shop to anyone serious about fitness.",
    },
    {
        name: "Emily T.",
        text: "As a personal trainer, I need reliable and durable equipment for my clients. Fitness Shop delivers on all fronts. Their range of professional-grade gear is impressive, and the quality is outstanding. My clients and I couldn't be happier!",
    },
    {
        name: "Michael L.",
        text: "I was a bit hesitant to buy gym equipment online, but Fitness Shop made the process easy and stress-free. The website is user-friendly, the prices are competitive, and the equipment arrived in perfect condition. I've never been more motivated to work out!",
    },
    {
        name: "Jessica W.",
        text: "Fitness Shop has everything I need to stay fit at home. I recently purchased a set of dumbbells and a bench, and the quality is far superior to anything I've used before. The team at Fitness Shop really cares about their customers, and it shows in their service and products.",
    },
];

const Testimonial = () => {
    return (
        <div className="py-6 my-6 shadow-xl bg-white border-2 border-gray-200 rounded-lg">
            <h2 className="text-center text-2xl font-bold">Testimonials</h2>
            <Carousel autoplay>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="py-6 px-20 space-y-2">
                        <h3 className="text-center text-lg font-medium italic">
                            "{testimonial.text}"
                        </h3>
                        <p className="text-center">- {testimonial.name}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonial;
