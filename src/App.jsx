import React from "react";
import "./styles.css";


const Item = (props) => (
  <li onClick={() => props.handleClick(props.listItem)}>
    {props.description}
    <ul>
      {props.listItem.subList &&
        props.listItem.subList.map((subListItem) => {
          return <li>{subListItem}</li>;
        })}
    </ul>
  </li>
);

class App extends React.Component {
  state = {
    outerList: [{ name: "option1" }, { name: "option2" }, { name: "option3" }],
    innerList: ["apple", "mango", "orange"],
  };

  handleClick = (listItem) => {
    const newOuterList = this.state.outerList.map((element) => {
      if (element === listItem) {
        const newElement = { ...element };
        if (newElement.subList) {
          delete newElement.subList;
        } else {
          newElement.subList = this.state.innerList;
        }
        return newElement;
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
            />
          );
        })}
      </ol>
    );
  }
}

export default App;
