import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import jobLoader from './loaders/jobsLoader';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blogs from './components/Blogs/Blogs';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch('jobDetails.json'),
      },
      {
        path: "/:jobDetails",
        element: <JobDetails></JobDetails>,
        loader:()=>fetch('jobDetails.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/applied_jobs",
        element: <AppliedJobs></AppliedJobs>,
        loader: jobLoader,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      
    ],  
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
