import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../Layout/MainLayout";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import Footer from "../pages/Footer/Footer";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <h2>Route not found</h2>,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/signin',
          element: <SignIn></SignIn>
        },
        {
          path:'footer',
          element: <Footer></Footer>
        }
      ]
    },
  ]);

  export default router;