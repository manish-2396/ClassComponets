import { Component } from "react";
import "./App.css";
import ClassComponent from "./Component/ClassComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClassComponent name="manish" />
      </div>
    );
  }
}

export default App;
