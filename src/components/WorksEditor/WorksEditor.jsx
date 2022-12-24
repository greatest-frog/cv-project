import { Component } from "react";

class WorksEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: "",
      position: "",
      tasks: "",
      startDate: "",
      endDate: "",
    };
  }

  onSubmit(e) {
    this.props.onSubmit(e, "works", this.state);
  }

  handleInput(e) {
    this.setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  render() {
    return (
      <div className="works-editor editor">
        <h2>Works</h2>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="companyInput">
            <label>
              Company name
              <input
                type="text"
                name="companyName"
                value={this.state.companyName}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <div className="positionInput">
            <label>
              Position
              <input
                type="text"
                name="position"
                value={this.state.position}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <div className="tasksInput">
            <label>
              Tasks
              <textarea
                name="tasks"
                cols="30"
                rows="10"
                value={this.state.tasks}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <div className="startDateInput">
            <label>
              Start date
              <input
                type="date"
                name="startDate"
                value={this.state.startDate}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <div className="endDateInput">
            <label>
              End date
              <input
                type="date"
                name="endDate"
                value={this.state.endDate}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <button type="submit">Add work</button>
        </form>
      </div>
    );
  }
}

export default WorksEditor;
