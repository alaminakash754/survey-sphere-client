import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../../Components/Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../../Components/Hooks/useAdmin";
import { FaHome, FaList,  FaSignOutAlt, FaUsers } from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";


const Dashboard = () => {
    const { logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const navigate = useNavigate();



    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="mt-5">
            <Helmet><title>Survey Sphere | Dashboard</title></Helmet>
            <div className="flex ">
                <div className="w-60 min-h-full bg-purple-100">
                    <ul className="menu">

                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to='/dashboard/adminHome'><FaHome></FaHome> Admin Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/users'>
                                            <FaUsers></FaUsers> All Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/payments'>
                                            <FcSalesPerformance></FcSalesPerformance> Manage All Payments</NavLink>
                                    </li>
                                   

                            
                                </>
                                :
                                <>
                                    <li>
                                        <NavLink to='/dashboard/SurveyorHome'>
                                            <FaHome></FaHome> Surveyor Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/dashboard/surveyList'>
                                            <FaList></FaList> All Survey
                                        </NavLink>
                                    </li>

                                   
                                    
                                </>
                        }
                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
                        <li><button onClick={handleSignOut}><FaSignOutAlt></FaSignOutAlt> Logout</button></li>

                    </ul>
                </div>
                <div className="flex-1 p-6">
                    <Outlet></Outlet>
                </div>
            </div>
           
        </div>
    );
};

export default Dashboard;