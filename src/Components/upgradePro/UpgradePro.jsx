import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTitle";


const UpgradePro = () => {
    return (
        <div className="py-16 bg-base-200">
            <Helmet>
                <title>SurveySphere || PRO</title>
            </Helmet>
            <SectionTitle className='pt-10' heading={"Want To Be PRO"} subHeading={"get ultimate services"}>
            </SectionTitle>

            <div className="hero rounded-xl">
                <div className="hero-content flex-col justify-between lg:flex-row-reverse">
                    <div className="md:w-full">
                        <img className="rounded-xl" src="https://i.ibb.co/k0fSLSb/29210380-32.jpg" />
                    </div>
                    <div className=" border-t-8 border-t-pink-600 card w-full bg-white text-center p-5 shadow-xl space-y-5 items-center">
                        <p>3 years Pro</p>
                        <p>$ <span className="font-bold text-4xl">299</span></p>
                        <Link to="/dashboard/payment"><button className="btn btn-secondary">Upgrade Now!</button></Link>
                        <p className="text-gray-600 border-b-2 mt-2">
                            able to vote surveys
                        </p>
                        <p className="text-gray-600 border-b-2 mt-2">
                            can comment on survey
                        </p>
                        <p className="text-gray-600 border-b-2 mt-2">
                            Direct links
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpgradePro;