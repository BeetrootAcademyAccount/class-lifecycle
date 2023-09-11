import { Component } from "react";
import Main from "./pages/Main";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor");

    this.state = {
      isMounted: true,
      counter: 1,
    };
  }

  toggleMount = () => {
    this.setState((prevState) => ({
      isMounted: !prevState.isMounted,
      counter: ++prevState.counter,
    }));
  };

  componentDidMount() {
    console.log("App Mount");
  }

  componentDidUpdate() {
    console.log("App Update");
  }

  componentWillUnmount() {
    console.log("App Destroy");
  }

  state = {};
  render() {
    console.log("App Render");
    return (
      <div>
        <h1>Hello</h1>
        <Main counter={this.state.counter} />
        <button onClick={this.toggleMount}>Toggle Main</button>
      </div>
    );
  }
}

export default App;
