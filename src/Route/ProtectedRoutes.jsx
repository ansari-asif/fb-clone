import EditProfilePage from "../Pages/EditProfilePage";
import Friends from "../Pages/Friends";
import ProfilePage from "../Pages/ProfilePage";
import Feed from "../components/Feed";

const protectedRoutes = [
    { path: "/", element: <Feed/> },
    { path: "/friends", element: <Friends /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/edit-profile", element: <EditProfilePage /> },
]


export default protectedRoutes;