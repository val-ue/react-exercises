import React from "react";
import "./styles.css";

const Item = (props) => (

  handlePriority = () => {

  };

  <li
    data-testid="todo-item"
    className={props.item.completed ? "item-completed" : ""}
  >
    {props.item.value}
    <button
      data-testid="toggle-button"
      onClick={() => props.handleToggle(props.item)}
    >
      Toggle
    </button>
    <button
      data-testid="delete-button"
      onClick={() => props.handleRemove(props.item)}
    >
      Remove
    </button>
    <input
      type="number"
      onChange={this.handlePriority()}
      id="priority"
      name="priority"
      min="1"
      max="5"
    />
    //on change, it updates App so its priotity value matches the imput value
    //remember, dont change the original data //so, on change, App will update
    //the item's priority value //and set the state to the new list
  </li>
);

const List = (props) => (
  <ul data-testid="todo-list">
    {props.list.map((item) => (
      <Item
        key={item.id}
        item={item}
        handleToggle={props.handleToggle}
        handleRemove={props.handleRemove}
      />
    ))}
  </ul>
);

class Form extends React.Component {
  state = {
    inputValue: "",
  };
  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = (e) => {
    console.log("submitted");
    e.preventDefault();
    const value = this.state.inputValue;

    this.setState({ inputValue: "" });
    this.props.handleSubmit(value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          data-testid="add-todo"
          onChange={this.handleChange}
          value={this.state.inputValue}
        />
      </form>
    );
  }
}

class App extends React.Component {
  state = {
    list: [],
    filterValue: "",
  };

  handleFilterUpdate = (value) => {
    this.setState({ filterValue: value });
  };

  handleSubmit = (value) => {
    const item = {
      value,
      completed: false,
      id: `${Math.random()}-${Math.random()}`,
    };
    const newList = [...this.state.list, item];
    this.setState({ list: newList });
  };

  handleToggle = (item) => {
    const newList = this.state.list.map((element) => {
      if (element.id === item.id) {
        element.completed = !element.completed;
      }
      return element;
    });
    this.setState({ list: newList });
  };

  handleRemove = (item) => {
    const removeItem = this.state.list.filter(
      (element) => element.id !== item.id
    );
    this.setState({ list: removeItem });
  };

  handleSort = (item) => {};

  render() {
    const filteredList = this.state.list.filter((element) => {
      return element.value.includes(this.state.filterValue);
    });

    return (
      <div className="App">
        <Form
          handleSubmit={this.handleSubmit}
          handleFilterUpdate={this.handleFilterUpdate}
        />

        <input
          onChange={(e) => this.handleFilterUpdate(e.target.value)}
          value={this.state.filterValue}
        />

        <List
          list={filteredList}
          handleToggle={this.handleToggle}
          handleRemove={this.handleRemove}
        />

        <button onClick={this.handleSort}>Sort</button>
      </div>
    );
  }
}

export default App;
