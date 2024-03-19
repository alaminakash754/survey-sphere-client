import { useEffect, useState } from "react";


const useSurveys = () => {
    const [survey, setSurvey] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://survey-sphere-server-drab.vercel.app/surveys')
        .then(res => res.json())
        .then(data => {
            setSurvey(data);
            setLoading(false);
        })
    } ,[survey])
    return [survey, loading]
};

export default useSurveys;