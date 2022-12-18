import { Component } from "react";
import CvPreview from "./components/CvPreview/CvPreview";
import CvEditor from "./components/CvEditor/CvEditor";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      surname: "",
      email: "",
      phone: "",
      education: [],
      works: [],
    };
  }

  handleInput(e) {
    this.setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  onSubmit(e, part, obj) {
    e.preventDefault();
    this.setState((state) => ({
      ...state,
      [part]: state[part].concat(obj),
    }));
  }

  render() {
    return (
      <div className="app">
        <CvEditor
          data={this.state}
          handleInput={(e) => this.handleInput(e)}
          onSubmit={(e, part, obj) => this.onSubmit(e, part, obj)}
        />
        <CvPreview data={this.state} />
      </div>
    );
  }
}

export default App;
