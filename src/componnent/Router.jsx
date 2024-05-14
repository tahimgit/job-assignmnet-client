import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Home";
import Logins from "./Logins";
import Register from "./Register";
import ErrorPage from "./ErrorPage";
import AllTouristSpot from "./AllTouristSpot";
import MyLIst from "./MyLIst";
import PrivetRout from "./PrivetRout/PrivetRout";
import Profile from "./PrivetRout/Profile";
import AddSpot from "./AddSpot";
import SpotDetails from "./SpotDetails";
import Update from "./Update";
import JobTypeCard from "./JobTypeCard";
import AppliedJobs from "./AppliedJobs";
import SavedJobs from "./SavedJobs";
import Blog from "./Blog";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/trending-jobs"),
      },
      {
        path: "/login",
        element: <Logins></Logins>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/jobs",
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/category/:id",
        element: <JobTypeCard></JobTypeCard>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myList/",
        element: (
          <PrivetRout>
            {" "}
            <MyLIst></MyLIst>
          </PrivetRout>
        ),
      },
      {
        path: "/appliedjobs",
        element: (
          <PrivetRout>
            <AppliedJobs></AppliedJobs>
          </PrivetRout>
        ),
      },
      {
        path: "/savedjobs",
        element: (
          <PrivetRout>
            <SavedJobs></SavedJobs>
          </PrivetRout>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivetRout>
            <Profile></Profile>
          </PrivetRout>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivetRout>
            <AddSpot></AddSpot>
          </PrivetRout>
        ),
      },
      {
        path: "/details/:_id",
        element: (
          <PrivetRout>
            <SpotDetails></SpotDetails>
          </PrivetRout>
        ),
        loader: () => fetch("http://localhost:5000/jobs"),
      },
      {
        path: "/update/:id",
        element: (
          <PrivetRout>
            <Update></Update>
          </PrivetRout>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/job/${params.id}`),
      },
      // {
      //   path: '/category',
      //   element: <Category></Category>
      // }
    ],
  },
]);

export default Router;