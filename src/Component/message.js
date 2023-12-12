import React,{Component} from "react";
class Messages extends Component {
    constructor(){
        super()
        this.state = {
            counter: 0,
        }
    }
    increment() {
        this.setState({
          counter: this.state.counter + 2,
        });
      }
    render(){
        return(
            <div className="counter">
            <p>{ this.state.counter} </p>
            <button onClick={() => this.increment()}> increment </button>
            </div>

        );
    };
}
export default Messages;