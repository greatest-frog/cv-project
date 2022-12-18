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
      <div className="works-editor">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="companyInput">
            <label htmlFor="companyInput">Company name</label>
            <input
              type="text"
              name="companyName"
              id="companyInput"
              value={this.state.companyName}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="positionInput">
            <label htmlFor="positionInput">Position</label>
            <input
              type="text"
              name="position"
              id="positionInput"
              value={this.state.position}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="tasksInput">
            <label htmlFor="tasksInput">Tasks</label>
            <textarea
              name="tasks"
              id="tasksInput"
              cols="30"
              rows="10"
              value={this.state.tasks}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="startDateInput">
            <label >Start date
            <input
              type="date"
              name="startDate"
              id="startDateInput"
              value={this.state.startDate}
              onChange={(e) => this.handleInput(e)}
              required
            />
            </label>
          </div>
          <div className="endDateInput">
            <label>End date
            <input
              type="date"
              name="endDate"
              id="endDateInput"
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
