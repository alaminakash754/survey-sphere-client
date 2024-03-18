import { Helmet } from "react-helmet-async";
import useSurveys from "../../Components/Hooks/useSurveys";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import SurveyCard from "./SurveyCard";


const AllSurveys = () => {
    const [surveys] = useSurveys();

    // console.log(surveys) 
    return (
        <div>
            <div >
             <Helmet><title>Survey Sphere | Surveys</title></Helmet>
            <SectionTitle className="top-20" heading={"All Surveys is Here"} subHeading={"Online Survey"}></SectionTitle>
            {
                surveys.map(survey => <SurveyCard className='' key={survey._id} survey={survey}></SurveyCard>)
            }
        </div>
        </div>
    );
};

export default AllSurveys;