import React from "react";
import "./shimmer.css";

const Shimmer = () => {
    return (
        <div className="shimmer-container">
            <div className="shimmer-header">
                <div className="shimmer-title"></div>
                <div className="shimmer-subtitle"></div>
            </div>
            <div className="shimmer-menu">
                {Array(6).fill("").map((_, index) => (
                    <div key={index} className="shimmer-item"></div>
                ))}
            </div>
        </div>
    );
};

export default Shimmer;