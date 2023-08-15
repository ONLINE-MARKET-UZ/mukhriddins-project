import React, {useEffect, memo, useState} from "react";
import Extra1 from "./components/Extra/Extra1";

const App = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log("Render App");
    }, [counter]);

    return (
        <div className="container mx-auto">
            <div className="border p-40 border-gray-800 m-6">
                <h1 className="text-3xl">APP {counter}</h1>
                <button onClick={() => setCounter(counter - 1)} className="p-3 bg-red-600 m-3">
                    -
                </button>
                <button onClick={() => setCounter(counter + 1)} className="p-3 bg-green-600 m-3">
                    +
                </button>
                <Extra1 counter={counter} />
            </div>
        </div>
    );
};

export default React.memo(App);
