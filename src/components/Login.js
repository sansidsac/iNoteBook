import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({showAlert}) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"", password:""});

    const handleOnSubmit= async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password}),
        });
        const json = await response.json();
        console.log(json);

        if(json.success){
            //save the auth token and redirect
            localStorage.setItem("token",json.authtoken);
            navigate("/");
            showAlert("Logged in successfully","success");
        }else{
            showAlert("Invalid credentials","danger");
        }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div className="container">
      <form className="form" onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={onChange}
            name="password"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>{" "}
    </div>
  );
};

export default Login;
