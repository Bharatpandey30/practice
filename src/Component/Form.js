import React, { Component } from "react";

class Form extends Component {
    state = {
        firstName: "",
        output: "", // New state for the output
    }

    eventHandle = (event) => {
        this.setState({
            firstName: event.target.value,
        });
    }

    showOutput = () => {
        this.setState({
            output: this.state.firstName,
        });
    }

    render() {
        return (
            <form>
                <p> </p> {/* Add your text or remove this line if not needed */}
                <input
                    type="text"
                    value={this.state.firstName}
                    onChange={this.eventHandle}
                />
                <button onClick={this.showOutput}>Show Output</button>
                <input
                    type="text"
                    value={this.state.output} readOnly />
            </form>
        );
    }
}

export default Form;
