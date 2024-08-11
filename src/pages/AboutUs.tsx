import Contact from "../components/About/Contact";
import Overview from "../components/About/Overview";
import Team from "../components/About/Team";
import Testimonial from "../components/About/Testimonial";

const AboutUs = () => {
    return (
        <div className="px-4 md:px-8 lg:px-28">
            <Overview />
            <Team />
            <Testimonial />
            <Contact />
        </div>
    );
};

export default AboutUs;
