import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function AuthShield({ children }) {
    const user = useSelector((state) => state.user.value);
    const userLoading = useSelector((state) => state.userLoading.value);

    const location = useLocation();

    if (userLoading)
        return <h1 style={{ textAlign: 'center' }}>Loading user</h1>;

    if (!userLoading && !user)
        return <Navigate to="/login" state={{ from: location }} replace />;

    return children;
}

export default AuthShield;