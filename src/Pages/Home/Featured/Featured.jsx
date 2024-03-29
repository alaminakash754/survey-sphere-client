import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Featured = () => {
    return (
        <div className="mt-10">
            <SectionTitle heading={"Featured Surveys"} subHeading={"We committed for real survey"}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5">
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How satisfied are you with the facilities and resources available?</h1>
                    <p className="text-gray-500 mb-4">Education Feedback</p>
                    <h4 className="mb-4"> Feedback from education surveys helps institutions improve teaching methods, curriculum, and overall student satisfaction.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 55</p>
                        <p>Dislikes: 2</p>
                        <p>Total Voted (Poll): 57 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 28/07/2023, 22:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How satisfied are you with the care received from healthcare providers?</h1>
                    <p className="text-gray-500 mb-4">Healthcare Experience</p>
                    <h4 className="mb-4">  Feedback from healthcare surveys assists in improving patient care, enhancing service delivery, and addressing any shortcomings in the healthcare system.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 67</p>
                        <p>Dislikes: 0</p>
                        <p>Total Voted (Poll): 67 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 12/02/2024, 20:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How willing are you to pay more for eco-friendly products/services?</h1>
                    <p className="text-gray-500 mb-4">Environmental Awareness</p>
                    <h4 className="mb-4">  Surveys on environmental awareness help gauge public sentiment, guide environmental initiatives, and promote sustainable behaviors.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 50</p>
                        <p>Dislikes: 10</p>
                        <p>Total Voted (Poll): 60 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 01/01/2024, 12:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How many hours of sleep do you typically get per night?</h1>
                    <p className="text-gray-500 mb-4">Health & Wellness</p>
                    <h4 className="mb-4"> Exploring mental health and understanding sleep patterns for overall well-being.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 20</p>
                        <p>Dislikes: 5</p>
                        <p>Total Voted (Poll): 25 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 08/11/2023, 10:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How satisfied are you with your recent online purchase?</h1>
                    <p className="text-gray-500 mb-4">Customer Satisfaction</p>
                    <h4 className="mb-4"> Your feedback helps us improve our online shopping experience.

                    </h4>
                    <div className="flex gap-2 justify-between">
                        <p>Likes: 40</p>
                        <p>Dislikes: 15</p>
                        <p>Total Voted (Poll): 55 </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-4">Timestamp: 25/12/2023, 00:15:00</p>
                </div>
                <div className="p-4 border border-r-4 border-b-4 border-purple-500 rounded-md shadow-md bg-white">
                    <h1 className="text-xl font-semibold mb-2">How often do you use social media?</h1>
                    <p className="text-gray-500 mb-4">Social Media</p>
                    <h4 className="mb-4"> We are interested in understanding your social media usage patterns.

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

export default Featured;