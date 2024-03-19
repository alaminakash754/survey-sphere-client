
import moment from "moment";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
    const { surveyName, description, category,_id } = survey;
    return (

        <>
        
                <div className="card w-[500px] bg-purple-100 text-purple-600 mx-auto top-24 mb-20">
                    <div className="card-body">
                        <h2 className="card-title">{surveyName}</h2>
                        <p>{category}</p>
                        <h2>{description}</h2>
                        <h2>Total Voted: 0</h2>
                        <div className="flex gap-10 mb-4">
                            <AiFillLike className="text-2xl"></AiFillLike> <p>0</p>
                            <AiFillDislike className="text-2xl"></AiFillDislike><p>0</p>
                        </div>
                        
                        <Link to={`/surveyDetails/${_id}`}><button className="bg-purple-100 text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4">Details</button></Link>
                        <p className="text-purple-600">{moment().format('MMMM Do YYYY')}</p>
                    </div>
                </div>
          
        </>

    );
};

export default SurveyCard;