import { Helmet } from "react-helmet-async";
import useSurveys from "../../Components/Hooks/useSurveys";

import SurveyCard from "./SurveyCard";


const AllSurveys = () => {
    const [surveys] = useSurveys();

    // console.log(surveys) 
    return (
        <div>
            <div >
                <Helmet><title>Survey Sphere | Surveys</title></Helmet>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-2' >

                    {
                        surveys.map(survey => <SurveyCard key={survey._id} survey={survey}></SurveyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllSurveys;