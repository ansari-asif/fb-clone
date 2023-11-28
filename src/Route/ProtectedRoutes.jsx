import Friends from "../Pages/Friends";
import Feed from "../components/Feed";

const protectedRoutes = [
    { path: "/", element: <Feed/> },
    { path: "/friends", element: <Friends /> },
]


export default protectedRoutes;