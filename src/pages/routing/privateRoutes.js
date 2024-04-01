import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    const token = localStorage.getItem("token");

    // Si l'utilisateur est connecté (a un token), affichez les enfants (routes privées)
    // Sinon, redirigez vers la page de connexion
    return token ? children : <Navigate to="/login" replace={true} />;
};