import { Helmet } from "react-helmet-async";
import useSurveys from "../../../Components/Hooks/useSurveys";

import SurveyorListCard from "./SurveyorListCard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";



const SurveyList = () => {
    const [surveys] = useSurveys();
    console.log()
    return (
        <div>
        <div >
            <Helmet><title>Survey Sphere | Surveys</title></Helmet>
            <SectionTitle heading={"Survey List"} subHeading={"lets see your Survey"}>
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5' >

                {
                    surveys.map(survey => <SurveyorListCard key={survey._id} survey={survey}></SurveyorListCard>)
                }
            </div>
        </div>
    </div>
    );
};

export default SurveyList;