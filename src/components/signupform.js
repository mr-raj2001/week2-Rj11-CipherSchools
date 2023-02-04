import React, { useState } from "react";

const signupform = () => {
    const [state, setState] = useState[{
        firstName:" ",
        lastName:" ",
        email:" ",
        password:" ",
    }];


    let handleChange = (e) =>
    setState({...state, [e.target.name]: e.targetvalue});

    return (
        <form>
            <label>
             First Name   
            </label>
            <input name={"firstName"}
            type={"text"}
            onChange={handleChange}
            value={state.firstName}
            placeholder={"first Name"}></input>

<label>
             Last Name   
            </label>
            <input name={"lastname"}
            type={"text"}
            onChange={handleChange}
            value={state.lastName}
            placeholder={"last Name"}></input>

<label>
             Email   
            </label>
            <input name={"email"}
            type={"text"}
            onChange={handleChange}
            value={state.email}
            placeholder={"email"}></input>

<label>
             password  
            </label>
            <input name={"password"}
            type={"text"}
            onChange={handleChange}
            value={state.password}
            placeholder={"password"}></input>

            <button type="submit">submit</button>
        </form>
    )




};