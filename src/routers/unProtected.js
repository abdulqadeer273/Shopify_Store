import Collections from "../pages/collections/Collections";
import Contact from "../pages/contact/Contact";
import Description from "../pages/description/Description";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignIn from "../pages/register/SignIn";

const unProtectedRoutes = [
    {
      path: "/",
      element: <Home />,
    },
    {
        path: "/collections",
        element: <Collections />,
    },
    {
        path:"/products",
        element: <Description />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "register",
        element: <SignIn />
    },
    {
        path:"/login",
        element: <Login />
    }
]
export default unProtectedRoutes;