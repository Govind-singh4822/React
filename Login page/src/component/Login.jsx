import React from "react";
//import Input from "./Input";

function Login(props){
    return (
        <form className="form">
        <input 
            type="text"
            placeholder="Username"
        />
        <input 
            type="password"
            placeholder="Password"
        />

        {props.isLogged==false ? 
            <input type="password" placeholder="Confirm Password"/> : null}

         <button type="submit">{props.isLogged ? "Login" : "Register"}</button>
    </form>
    );
}

export default Login;