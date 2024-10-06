// LoadingScreen.jsx
import React, { useState, useEffect } from "react";
import loadingImage from "../../assests/images/paper-plane.png"; // Adjust path as needed
import "./LoadingScreen.css"; // Import CSS for the loading screen

const LoadingScreen = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Simulate loading completion
        const timer = setTimeout(() => {
            setIsVisible(false); // Start fade-out transition
        }, 800); // Adjust the duration as needed

        return () => clearTimeout(timer); // Clean up timer on component unmount
    }, []);

    return (
        <div
            className="loading-screen"
            style={{
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "all" : "none",
            }}
        >
            <div className="loading-container">
                <img src={loadingImage} alt="Loading" />
                
            </div>
        </div>
    );
};

export default LoadingScreen;
