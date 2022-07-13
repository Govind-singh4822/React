import React from "react";
import Login from "./Login";

var isLogged = true;

function App(){
    return (
            <div className="container">
                <Login isLogged={isLogged}/>
            </div>
    );
}

export default App;