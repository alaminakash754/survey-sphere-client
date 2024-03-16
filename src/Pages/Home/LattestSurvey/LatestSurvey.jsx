import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const LatestSurvey = () => {
    return (
        <div className="mt-14">
            <SectionTitle heading={"Latest Surveys"} subHeading={"Our latest surveys"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">What obstacles hinder seeking help for substance abuse?</h1>
                    <p className="text-gray-500 mb-4">Drug Addiction </p>
                    <h4 className="mb-4"> Feedback from drug addiction surveys 
Understanding addiction trends, aiding prevention, and guiding support initiatives.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 55</p>
                        <p>Dislikes: 2</p>
                        <p>Total Voted (Poll): 57 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 28/07/2023, 22:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">What is your favorite type of cuisine or dish?</h1>
                    <p className="text-gray-500 mb-4">Food Preferences</p>
                    <h4 className="mb-4">  Informs menu planning and product development for food businesses.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 67</p>
                        <p>Dislikes: 0</p>
                        <p>Total Voted (Poll): 67 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 12/02/2024, 20:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">Which political party or candidate do you currently support, if any?</h1>
                    <p className="text-gray-500 mb-4">Political Opinion </p>
                    <h4 className="mb-4">  Surveys on political opinion help Shapes political strategies and informs policy decisions.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 50</p>
                        <p>Dislikes: 10</p>
                        <p>Total Voted (Poll): 60 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 01/01/2024, 12:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">What is the one feature or improvement you would like to see in our product/service?</h1>
                    <p className="text-gray-500 mb-4">Product Feedback</p>
                    <h4 className="mb-4"> Improves product quality and customer satisfaction.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 20</p>
                        <p>Dislikes: 5</p>
                        <p>Total Voted (Poll): 25 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 08/11/2023, 10:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">On a scale of 1 to 10, how confident do you feel about your current financial situation?</h1>
                    <p className="text-gray-500 mb-4">Financial Wellness</p>
                    <h4 className="mb-4"> Your feedback helps individuals make informed financial decisions and plan for the future.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 40</p>
                        <p>Dislikes: 15</p>
                        <p>Total Voted (Poll): 55 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 25/12/2023, 00:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How likely are you to recommend your recent travel experience to friends or family?</h1>
                    <p className="text-gray-500 mb-4">Travel Experience </p>
                    <h4 className="mb-4">  Enhances customer experience and service quality in the tourism industry.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 10</p>
                        <p>Dislikes: 5</p>
                        <p>Total Voted (Poll): 15 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 28/11/2023, 20:15:00</p>
                </div>
               
            </div>
        </div>
    );
};

export default LatestSurvey;