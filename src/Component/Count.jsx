import { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleClick(count) {
    if (count === "increase") {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  }

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={() => this.handleClick("decrease")}>decrease</button>
        <span>{this.state.count}</span>
        <button onClick={() => this.handleClick("increase")}>increase</button>
      </div>
    );
  }
}

export default Count;
