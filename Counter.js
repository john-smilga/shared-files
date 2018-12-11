import React, { Component } from "react";

class App extends Component {
  render() {
    return <Counter amount="5" />;
  }
}
class Counter extends Component {
  state = {
    count: 0
  };
  handleIncrease = () => {
    console.log("called first :", this.state.count);

    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        // console.log("called second :", this.state.count);
      }
    );
    this.setState({
      count: this.state.count + 1
    });
    console.log("called third :", this.state.count);
  };
  handleDecrease = () => {
    console.log("called first :", this.state.count);

    this.setState(
      (state, props) => {
        return { count: state.count - props.amount };
      },
      () => {
        console.log("hello");
      }
    );
    // this.setState((state, props) => {
    //   return { count: state.count - props.amount };
    // });

    console.log("called third :", this.state.count);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ margin: "3rem", fontSize: "2rem" }}>
          <button type="button" onClick={this.handleDecrease}>
            lower
          </button>
          <span style={{ margin: "1rem" }}>count : {this.state.count} </span>
          <button type="button" onClick={this.handleIncrease}>
            increase
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
