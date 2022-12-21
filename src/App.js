import { Component } from "react";
import "./App.css";
import Count from "./Component/Count";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Count name="manish" />
      </div>
    );
  }
}

export default App;
