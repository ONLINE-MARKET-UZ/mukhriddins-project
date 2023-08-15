import React, {useEffect, useState, memo} from "react";
import Extra2 from "./Extra2";

const Extra1 = ({counter}) => {
    const [num, setNum] = useState(0);
    useEffect(() => {
        console.log("Render Extra1");
    }, []);

    return (
        <div className="border p-40 border-gray-800 m-6 bg-green-200">
            <h1>Extra 1 {counter}</h1>

            <button onClick={() => setNum(num - 1)} className="p-3 bg-red-600 m-3">
                -
            </button>
            <button onClick={() => setNum(num + 1)} className="p-3 bg-green-600 m-3">
                +
            </button>
            <Extra2 counter={num} />
        </div>
    );
};

export default memo(Extra1);
