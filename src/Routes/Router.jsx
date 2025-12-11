import React from 'react';
import { createBrowserRouter } from "react-router";
import RootLayout from '../Layouts/RootLayout';
import Home from '../pages/Home/Home';
import AllIssues from '../pages/AllIssues/AllIssues';
import AboutUs from '../pages/AboutUs/AboutUs';
import HowItWorks from '../pages/HowItWorks/HowItWorks';
import Register from '../pages/Auth/Register';
import Login from '../pages/Auth/Login';
import ResolvedIssueDetails from '../pages/ResolvedIssueDetails/ResolvedIssueDetails';

const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayout,
    children:[
      {
        index:true,
        Component:Home
      },
      {
        path:"/allissues",
        Component:AllIssues
      },
      {
        path:'/aboutus',
        Component:AboutUs
      },
      {
        path:'/howitworks',
        Component:HowItWorks
      },
      {
        path:'/details',
        Component:ResolvedIssueDetails
      }
    ]
  },
  {
    path:'/register',
    Component:Register
  },
  {
    path:'/login',
    Component:Login
  }
]);

export default router;