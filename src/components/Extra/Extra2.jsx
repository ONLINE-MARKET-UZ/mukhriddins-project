import React, {useEffect} from "react";

const Extra2 = ({counter}) => {
    useEffect(() => {
        console.log("Render Extra2");
    }, []);
    return (
        <div className="border p-40 border-gray-800 m-6 bg-blue-200">
            <h1>Extra 2 {counter}</h1>
        </div>
    );
};

export default Extra2;
