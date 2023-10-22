import React from "react";

const Login=()=>{
    return(
    <>
    <h1 className="text-center">Login to page</h1>
    <div className="d-flex">
    <input className="form-control me-2" type="search" placeholder="Email"></input>
    <input className="form-control me-2" type="search" placeholder="Password"></input>
    <button className="form-control me-2 bg-primary" type="submit">Login</button>
    </div>
    </>
    );
};
export default Login;
