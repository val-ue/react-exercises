import React from "react";
import "./styles.css";

const Item = (props) => (
  <li onClick={() => props.handleClick(props.listItem)}>
    {props.description}

    {props.listItem.isOpen && (
      <ul>
        {props.innerList.map((subListItem) => {
          return <li>{subListItem}</li>;
        })}
      </ul>
    )}
  </li>
);

class App extends React.Component {
  state = {
    outerList: [
      { name: "option1", isOpen: false },
      { name: "option2", isOpen: false },
      { name: "option3", isOpen: false },
    ],
    innerList: ["apple", "mango", "orange"],
  };

  handleClick = (listItem) => {
    const newListItem = { ...listItem };
    newListItem.isOpen = !listItem.isOpen;

    const newOuterList = this.state.outerList.map((element) => {
      if (element === listItem) {
        return newListItem;
      }
      return element;
    });
    this.setState({ outerList: newOuterList });
  };

  render() {
    return (
      <ol>
        {this.state.outerList.map((listItem, index) => {
          return (
            <Item
              key={index}
              handleClick={this.handleClick}
              description={listItem.name}
              listItem={listItem}
              innerList={this.state.innerList}
            />
          );
        })}
      </ol>
    );
  }
}

export default App;
