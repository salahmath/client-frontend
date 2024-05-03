import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    const token =JSON.parse( localStorage.getItem("Client"));
    
    return token ? children : <Navigate to="/login" replace/>;
};
