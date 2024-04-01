import { Navigate } from "react-router-dom";

export const OpenRoutes = ({ children }) => {
    const token = localStorage.getItem("token");

    return token === undefined ? children : <Navigate to="/" replace={true} />;
};
