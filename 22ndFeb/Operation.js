import React from "react";
import "./Operation.css";

class Opera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
      b: 3,
    };
  }
  func1=()=>{
    this.setState({a:"4",b:"3"})
  }
  func2=()=>{
    this.setState({b:"6",a:"2"})
  }
  func3=()=>{
    this.setState({a:"10",b:"5"})
  }
  render() {
    return (
      <>
        <button onClick={this.func1}>Change A</button>
        <button onClick={this.func2}>Change B</button>
        <button onClick={this.func3}>Change Both</button>
        {/* <h1>{(this.state.a*this.state.a)+(2*this.state.a*this.state.b)+(this.state.b*this.state.pmb)}</h1> */}
        <h1>{(this.state.a-this.state.b)*(this.state.a+this.state.b)}</h1>
      </>
    );
  }
}
export { Opera };
