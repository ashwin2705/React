import React, { Component } from 'react'

export default class PropsClassComp extends Component {
    state={
        count:1,
    };
      handleIncrement=()=>{
        this.setState({count:this.state.count-7});
      }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onMouseOver={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}
