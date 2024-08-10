import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const images = [
    {
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2018/11/Bearded-Man-Doing-An-Upperbody-Workout-With-Cable-Crossover-Exercise.jpg?quality=86&strip=all",
        width: 320,
        height: 612,
        span: 2,
    },
    {
        src: "https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 320,
        height: 212,
        span: 1,
    },
    {
        src: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 420,
        height: 300,
        span: 1,
    },

    {
        src: "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "https://cdn.muscleandstrength.com/sites/default/files/jamal_browner_deadlifting.jpg",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "data:image/jpeg;base64,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",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "https://cdn.muscleandstrength.com/sites/default/files/woman-glute-workout-in-gym.jpg",
        width: 420,
        height: 300,
        span: 1,
    },
];

const ImageGallerySection = () => {
    return (
        <div id="gallery-section" className="bg-white py-6 px-6">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
                <Masonry columnsCount={3} gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image.src}
                            alt=""
                            style={{ width: "100%", display: "block" }}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
        // <div
        //     id="gallery-section"
        //     className="bg-white grid grid-cols-4 gap-2 py-6 px-6"
        // >
        //     <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[0].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>
        //     <div className="row-span-2 h-[800px] hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[1].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>
        //     <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[2].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>
        //     <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[3].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>
        //     <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[4].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>
        //     <div className="h-[400px] col-span-2 hover:scale-110 transition-all duration-300 rounded-lg">
        //         <img
        //             src={images[5].src}
        //             alt=""
        //             className="w-full h-full rounded-lg"
        //         />
        //     </div>

        // </div>
    );
};

export default ImageGallerySection;
