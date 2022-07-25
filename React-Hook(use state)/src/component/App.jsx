import React from "react";

function App(){

    const [count,setcount] = React.useState(0);

    function increase()
    {
        setcount(count+1);
    }

    function decrese()
    {
        setcount(count-1);
    }

    return(
        <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
            <button onClick={decrese}>-</button>
        </div>
    );
}

export default App;