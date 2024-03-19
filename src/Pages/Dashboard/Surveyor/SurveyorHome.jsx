import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const SurveyorHome = () => {
    return (
        <div>
            <Helmet>Survey Sphere | Surveyor Home</Helmet>
            <div className="mt-8">
                <div className="divider"></div>
                <div className="flex justify-evenly">
                    <div className="text-start bg-purple-100 items-center justify-center rounded-lg p-3"><h2 className="text-xl font-semibold text-purple-700">My  Surveys</h2></div>
                    <div><Link to='/dashboard/createSurvey'>
                    <button  className="bg-purple-100 text-purple-700 font-medium btn btn-outline border-0 border-b-4">Create A New Survey</button>
                    </Link></div>
                </div>
                <div className="divider"></div>
            </div>
        </div>
    );
};

export default SurveyorHome;