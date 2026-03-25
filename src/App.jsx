import React from "react";
import "./styles.css";

class Counter extends React.Component {


  render() {
    return (
      <div>
        {this.props.defaultCounterValue}
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    counter: this.props.defaultCounterValue,
    counters: [
      { defaultCounterValue: 5, increment: 5 },
      { defaultCounterValue: 15, increment: 27 },
      { defaultCounterValue: 25, increment: 3 },
      { defaultCounterValue: 35 },
    ],
  };

  handleClick = () => {
    this.setState({ counter: this.state.counter + increment });
  };

  render() {
    return (
      //map it here
      <div className="App">
        {this.state.counters.map((counter) => {
          if (!counter.increment) {
            counter.increment = 1;
            return (
              <Counter
                defaultCounterValue={this.state.defaultCounterValue}
                increment={this.state.increment}
                onClick = 
              />
            );
          } else {
            return (
              <Counter
                defaultCounterValue={this.state.defaultCounterValue}
                increment={this.state.increment}
              />
            );
          }
        })}
      </div>
    );
  }
}

export default App;
