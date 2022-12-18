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
      <div className="education-editor">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <div className="universityInput">
            <label htmlFor="universityInput">University name</label>
            <input
              type="text"
              name="universityName"
              id="universityInput"
              value={this.state.universityName}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="degreeInput">
            <label htmlFor="degreeInput">Degree</label>
            <input
              type="text"
              name="degree"
              id="degreeInput"
              value={this.state.degree}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="startDateInput">
            <label htmlFor="startDateInput">Start date</label>
            <input
              type="date"
              name="startDate"
              id="startDateInput"
              value={this.state.startDate}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <div className="endDateInput">
            <label htmlFor="endDateInput">End date</label>
            <input
              type="date"
              name="endDate"
              id="endDateInput"
              value={this.state.endDate}
              onChange={(e) => this.handleInput(e)}
              required
            />
          </div>
          <button type="submit">Add education</button>
        </form>
      </div>
    );
  }
}

export default EducationEditor;
