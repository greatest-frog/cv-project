import { Component } from "react";

class EducationEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universityName: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
  }

  handleInput(e) {
    this.setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  }

  onSubmit(e) {
    this.props.onSubmit(e, "education", this.state);
  }

  render() {
    return (
      <div className="education-editor editor">
        <h2>Education</h2>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="universityInput">
            <label>
              University name
              <input
                type="text"
                name="universityName"
                value={this.state.universityName}
                onChange={(e) => this.handleInput(e)}
                required
              />
            </label>
          </div>
          <div className="degreeInput">
            <label>
              Degree
              <input
                type="text"
                name="degree"
                value={this.state.degree}
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
          <button type="submit">Add education</button>
        </form>
      </div>
    );
  }
}

export default EducationEditor;
