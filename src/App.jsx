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
  render() {
    return (
      <div className="app">
        <CvEditor data={this.state} />
        <CvPreview data={this.state} />
      </div>
    );
  }
}

export default App;
