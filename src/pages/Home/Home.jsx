import { useLoaderData } from "react-router-dom";
import AboutSection from "./AboutSection";
import Banner from "./Banner";
import ServiceSection from "./ServiceSection";


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <AboutSection></AboutSection>
            <ServiceSection services={services}></ServiceSection>
        </div>
    );
};

export default Home;