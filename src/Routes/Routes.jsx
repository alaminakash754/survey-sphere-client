import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/login/Login";
import SignUp from "../Pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import UpgradePro from "../Components/upgradePro/UpgradePro";
import Dashboard from "../Pages/Dashboard/dashboard/Dashboard";
import SurveyorHome from "../Pages/Dashboard/Surveyor/SurveyorHome";
import AdminHome from "../Pages/Dashboard/adminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import CreateSurvey from "../Pages/createSurvey/CreateSurvey";
import AllSurveys from "../Pages/surveys/AllSurveys";
import SurveyDetails from "../Pages/surveys/SurveyDetails";
import SurveyList from "../Pages/Dashboard/Surveyor/SurveyList";
import Payment from "../Pages/surveys/Payment";
import UpdateSurvey from "../Pages/Dashboard/Surveyor/UpdateSurvey";
// import MySurvey from "../Pages/surveys/MySurvey";

  
 export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        // {
        //   path:'mySurvey',
        //   element: <MySurvey></MySurvey>
        // },
        {
          path: 'upgradePro',
          element:<PrivateRoute><UpgradePro></UpgradePro></PrivateRoute>
        },
        {
          path:'allSurvey',
          element:<AllSurveys></AllSurveys>
        },
        {
          path:'/surveyDetails/:id',
          element:<PrivateRoute><SurveyDetails></SurveyDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/surveyDetails/${params.id}`)
        },
        {
          path: 'payment',
          element:<PrivateRoute><Payment></Payment></PrivateRoute>
        },
      ]
    },
    {
      path:'/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path:'surveyorHome',
          element: <SurveyorHome></SurveyorHome>
        },
        {
          path:'createSurvey',
          element: <CreateSurvey></CreateSurvey>
        },
        {
          path:'surveyList',
          element: <SurveyList></SurveyList>
        },
        {
          path: 'updateSurvey/:id',
          element: <UpdateSurvey></UpdateSurvey>,
          loader: ({params}) => fetch(`http://localhost:5000/surveys/${params.id}`)
        },
        
        // admin routes 
        {
          path: 'adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: 'users',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);
  