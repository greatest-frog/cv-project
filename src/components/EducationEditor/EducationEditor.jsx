import { useState } from "react";

function EducationEditor(props) {
  const [universityName, setUniversityName] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="education-editor editor">
      <h2>Education</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addEducation({
            universityName,
            degree,
            startDate,
            endDate,
          });
        }}
      >
        <div className="universityInput">
          <label>
            University name
            <input
              type="text"
              name="universityName"
              value={universityName}
              onChange={(e) => setUniversityName(e.target.value)}
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
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
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
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
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
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Add education</button>
      </form>
    </div>
  );
}

export default EducationEditor;
