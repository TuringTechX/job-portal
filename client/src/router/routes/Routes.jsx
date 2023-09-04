import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SingUp from "../../Pages/SignUp/SingUp";
import Error from "../../Pages/Error/Error";
import CreatePost from "../../Pages/Home/CreatePost/CreatePost";
import Careers from "../../pages/Home/ViewPost/Careers";
import UpdatePost from "../../Pages/Home/UpdatePost/UpdatePost";
import PrivateRoute from "../private-routes/PrivateRoutes";
import { Suspense } from "react";
import Loading from "../../component/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SingUp />,
      },
      {
        path: "/create-post",
        element: (
          <PrivateRoute>
            <CreatePost />
          </PrivateRoute>
        ),
      },
      {
        path: "/view-post",
        element: (
          <PrivateRoute>
            <Careers />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-post/:id",
        element: (
          <PrivateRoute>
            <Suspense fallback={<Loading />}>
              <UpdatePost />
            </Suspense>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
