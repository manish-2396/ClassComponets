import { Component } from "react";

class Todos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      todos_list: [],
    };
  }

  handleChange(event) {
    
    this.setState({ text: event.target.value });
  }

  handleClick() {
    this.setState({ todos_list: [...this.state.todos_list, this.state.text] });
  }

  render() {
    return (
      <div >
        <input
          type="text"
          placeholder="todos..."
          onChange={(e) => this.handleChange(e)}
        />
        <button onClick={() => this.handleClick()}>Submit</button>
        <h1>{this.state.text}</h1>
        {
            this.state.todos_list.map((e , i)=> {
                return (
                    <div key={i+1}>{e}</div>
                )
            })
        }
      </div>
    );
  }
}

export default Todos;
