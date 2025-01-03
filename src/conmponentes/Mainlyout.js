// MainLayout.js
import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify"; // Importing ToastContainer from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default MainLayout;
