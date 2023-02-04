import React, {useState} from "react";

const userdetails = (props) => {
    const [h1Text, seth1Text] = useState("This is a demo component");
    let user = props.user;
    return(
        <div>
            <h3>{user.name}</h3>
            <h5>
                Email: {user.email}
                <br/>
                Phone Number: {user.phoneNumber}
            </h5>
            <h1>{h1Text}</h1>
            <button onClick={(e) => {seth1Text("Hi i am Rishav Raj");}}>click me!</button>
        </div>
    )
}