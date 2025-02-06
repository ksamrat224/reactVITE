import React from "react";

const Shimmer = () => {
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {[...Array(12)].map((_, index) => (
                <div
                    key={index}
                    className="w-32 h-32 bg-gray-200 rounded-lg animate-pulse"
                ></div>
            ))}
        </div>
    );
};

export default Shimmer;
