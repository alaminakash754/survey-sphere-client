import { FaLinkedin } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const SurveyCard = ({ survey }) => {
    const { surveyName, surveyInfo, category } = survey;
    return (

        <div className="card w-[500px] mt-10 bg-purple-100 text-purple-600 mx-auto top-10">
            <div className="card-body">
                <h2 className="card-title">{surveyName}</h2>
                <p>{category}</p>
                <h2>{surveyInfo}</h2>
                <div className="flex gap-5">
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">Yes</span>
                            <input type="checkbox" defaultChecked className="checkbox" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text">No</span>
                            <input type="checkbox" defaultChecked className="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-10">
                    <AiFillLike></AiFillLike>
                    <AiFillDislike></AiFillDislike>
                </div>
            </div>
        </div>

    );
};

export default SurveyCard;