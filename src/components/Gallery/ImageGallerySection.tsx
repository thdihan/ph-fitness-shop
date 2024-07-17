const images = [
    {
        src: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
        width: 420,
        height: 300,
        span: 1,
    },
    {
        src: "https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600",
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
];

const ImageGallerySection = () => {
    return (
        <div className="bg-white grid grid-cols-4 gap-2 py-6 px-6">
            <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[0].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="row-span-2 h-[800px] hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[1].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[2].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[3].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="h-[400px] hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[4].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>
            <div className="h-[400px] col-span-2 hover:scale-110 transition-all duration-300 rounded-lg">
                <img
                    src={images[5].src}
                    alt=""
                    className="w-full h-full rounded-lg"
                />
            </div>

            {/* {images.map((image) => (
                <div key={image.src} className={`row-span-2`}>
                    <img src={image.src} alt="" className={`w-full`} />
                </div>
            ))} */}
        </div>
    );
};

export default ImageGallerySection;
