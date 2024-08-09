import Benefits from "../components/Blogs/Benefits";
import ImageGallerySection from "../components/Gallery/ImageGallerySection";
import Hero from "../components/Hero/Hero";
import FeaturedProducts from "../components/Products/FeaturedProducts";

const Home = () => {
    return (
        <div className="scroll-smooth">
            <Hero />
            <FeaturedProducts />
            <Benefits />
            <ImageGallerySection />
        </div>
    );
};

export default Home;
