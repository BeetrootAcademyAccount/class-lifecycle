import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);

    console.log("Main Constructor");
  }

  componentDidMount() {
    console.log("Main Mount");
  }

  componentDidUpdate() {
    console.log("Main Update");
  }

  componentWillUnmount() {
    console.log("Main Destroy");
  }
  render() {
    return <div>Hello from child {this.props.counter}</div>;
  }
}

export default Main;
