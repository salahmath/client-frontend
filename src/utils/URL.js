/* export const url="http://localhost:5000/api/"https://pfe-backend-14.onrender.com/ */
export const url="http://localhost:5000/api/"
export const getClient = () => {
    const Client = JSON.parse(localStorage.getItem("Client"));
    if (!Client || !Client.token) {
        console.warn("No token found in local storage");
        return null; // Retourne null si aucun jeton n'est trouvé
    }

    const token = Client.token;

    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };
}