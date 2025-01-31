import Collections from "../pages/collections/Collections";
import Contact from "../pages/contact/Contact";
import Home from "../pages/home/Home";

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
        path: "/contact",
        element: <Contact />,
    }
]
export default unProtectedRoutes;