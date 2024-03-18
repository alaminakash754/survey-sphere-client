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
        {
          path: 'upgradePro',
          element:<PrivateRoute><UpgradePro></UpgradePro></PrivateRoute>
        },
        {
          path:'allSurvey',
          element:<AllSurveys></AllSurveys>
        }
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
  