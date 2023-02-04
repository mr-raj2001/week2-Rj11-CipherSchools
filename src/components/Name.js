import React, {Component, component} from "react";

class Name extends Component {
    state = {Name: "Rishav Raj"};

    setName(name) {
        this.setState({...this.state, name});
    }


    render() {
        return <><h1>The name is: {this.state.name}</h1>;
        <button onClick={this.setName("Sahil sir")}>click me</button>
        </>
    }
}