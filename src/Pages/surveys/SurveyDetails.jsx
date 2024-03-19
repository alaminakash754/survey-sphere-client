import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { FaCommentAlt, FaHome } from "react-icons/fa";
import moment from "moment";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { useState } from "react";
import useSurveyor from "../../Components/Hooks/useSurveyor";



const SurveyDetails = () => {
    const [surveyor] = useSurveyor();
    const surveyDetails = useLoaderData();
    const { surveyName, surveyInfo, category } = surveyDetails;
    console.log(surveyName, surveyInfo, category);

    const [vote, setVote] = useState(0);
    const [disabledVote, setDisabledVote] = useState(false);
    const handleVote = () => {
        const newCount = vote + 1
        setVote(newCount);

        if (newCount === 1) {
            setDisabledVote(true);
        }
    }

    return (
        <div>
            <Helmet><title>Survey Sphere | Survey Details </title></Helmet>
            <SectionTitle heading={"Survey"} subHeading={" Survey Details"}>
            </SectionTitle>
            <Link to='/'><h2 className="text-2xl mb-5 text-purple-500 ml-5"><FaHome></FaHome></h2></Link>
            <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-purple-100 space-y-4">
                <h1 className="text-xl font-semibold mb-2">{surveyName}</h1>
                <p className="text-purple-500 mb-4">{category}</p>
                <h4 className="mb-4">{surveyInfo}

                </h4>
                <div className="flex gap-2">
                    <p>Yes</p>
                    <input onClick={() => { handleVote(); }} disabled={disabledVote}  type="radio" name="radio-4" className="radio radio-accent" />
                    <p>No</p>
                    <input type="radio" name="radio-4" className="radio radio-accent" />
                </div>
                <div className="flex gap-2 justify-between mb-2">
                    <p><AiFillLike className="text-2xl text-purple-600 "></AiFillLike> Likes: 55</p>
                    <p><AiFillDislike className="text-2xl text-purple-600 "></AiFillDislike>Dislikes: 2</p>
                    <p>Total Voted (Poll): {vote} </p>
                </div>
                <div className="mb-2">
                    {
                        surveyor ? <input type="text" placeholder="Write a Comment Now" className="input input-bordered input-primary w-full max-w-xs" />
                        :
                        <input disabled type="text" placeholder="Write a Comment Now" className="input input-bordered input-primary w-full max-w-xs" />
                    }
                     <button className="ml-5 text-3xl text-purple-500 pt-2"><FaCommentAlt></FaCommentAlt></button>

                </div>
                <b className="mt-4">{moment().format('MMMM Do YYYY, h:mm:ss a')}</b>
            </div>
        </div>
    );
};

export default SurveyDetails;