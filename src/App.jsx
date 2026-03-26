import React from "react";
import "./styles.css";

class Counter extends React.Component {
  state = {
    count: this.props.defaultCounterValue,
  };

  handleClick = () => {
    this.setState({
      count: this.state.count + this.props.increment,
    });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    counters: [
      { defaultCounterValue: 5, increment: 5 },
      { defaultCounterValue: 15, increment: 27 },
      { defaultCounterValue: 25, increment: 3 },
      { defaultCounterValue: 35 },
    ],
  };

  render() {
    return (
      <div className="App">
        {this.state.counters.map((element, index) => {
          return (
            <Counter
              key={index}
              defaultCounterValue={element.defaultCounterValue}
              increment={element.increment || 1}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
