import React from "react";
import "./styles.css";

class Counter extends React.Component {
  handleClick = () => {
    this.props.onIncrement(this.props.index, this.props.increment);
  };

  render() {
    return (
      <div>
        {this.props.count}
        <button onClick={this.handleClick}>increment</button>
      </div>
    );
  }
}

class SortButton extends React.Component {
  handleClick = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Sort</button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    counters: [
      { count: 5, increment: 5 },
      { count: 15, increment: 27 },
      { count: 25, increment: 3 },
      { count: 35 },
    ],
  };

  handleSort = () => {
    const newCounters = [...this.state.counters];
    newCounters.sort((a, b) => b.count - a.count);
    this.setState({
      counters: newCounters,
    });
  };

  onIncrement = (index, increment = 1) => {
    const newCounters = this.state.counters.map((counter, counterIndex) => {
      if (counterIndex !== index) {
        return counter;
      }
      return {
        ...counter,
        count: counter.count + increment,
      };
    });

    this.setState({
      counters: newCounters,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.counters.map((element, index) => {
          return (
            <Counter
              key={index}
              count={element.count}
              increment={element.increment}
              counters={this.state.counters}
              onIncrement={this.onIncrement}
              index={index}
            />
          );
        })}

        <SortButton counters={this.state.counters} onClick={this.handleSort} />
      </div>
    );
  }
}

export default App;
