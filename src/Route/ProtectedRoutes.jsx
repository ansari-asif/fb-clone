import Friends from "../Pages/Friends";
import Feed from "../components/Feed";

const protectedRoutes = [
    { path: "/", element: <Feed/> },
    // { path: "/friend", element: <Friends /> },
]


export default protectedRoutes;