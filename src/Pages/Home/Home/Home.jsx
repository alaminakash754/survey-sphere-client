
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import LatestSurvey from "../LattestSurvey/LatestSurvey";
import HowItWorks from "../HowWorks/HowItWorks";


const Home = () => {
    return (
        <div>
            <Helmet> <title>Survey-Sphere | Home</title></Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <LatestSurvey></LatestSurvey>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;