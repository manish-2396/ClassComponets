import { Component } from "react";
import "./App.css";
import Count from "./Component/Count";
import Todos from "./Component/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count name="manish" />
        <br/>
        <br/>
        <hr/>
        <Todos/>
      </div>
    );
  }
}

export default App;
