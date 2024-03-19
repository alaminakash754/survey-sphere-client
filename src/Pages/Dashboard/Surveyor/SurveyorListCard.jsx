import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";


const SurveyorListCard = ({survey}) => {
    const { surveyName, surveyInfo, category, _id } = survey;
    return (
        <>
        
        <div className="card w-[350px] bg-purple-100 text-purple-600 mx-auto mt-3">
            <div className="card-body">
                <h2 className="card-title">{surveyName}</h2>
                <p>{category}</p>
                <h2>{surveyInfo}</h2>
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-2xl mr-5">Yes</span>
                            <input type="checkbox"  className="checkbox" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text text-2xl mr-5">No</span>
                            <input type="checkbox"  className="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-10 mb-4">
                    <AiFillLike className="text-2xl"></AiFillLike>
                    <AiFillDislike className="text-2xl"></AiFillDislike>
                </div>
                
                <Link to={`/dashboard/updateSurvey/${_id}`}><button className="bg-purple-100 text-purple-700 font-medium btn btn-outline border-0 border-t-4 border-b-4">Edit</button></Link>
            </div>
        </div>
  
</>
    );
};

export default SurveyorListCard;