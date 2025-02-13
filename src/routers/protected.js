import Account from "../pages/account/Account";

const protectedRoutes = [
    {
        path: "/account",
        element: <Account />,
    },
]
export default protectedRoutes;