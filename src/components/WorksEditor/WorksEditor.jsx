import { useState } from "react";

const WorksEditor = (props) => {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  return (
    <div className="works-editor editor">
      <h2>Works</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.addWork({
            companyName,
            position,
            tasks,
            startDate,
            endDate,
          });
        }}
      >
        <div className="companyInput">
          <label>
            Company name
            <input
              type="text"
              name="companyName"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
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
              value={position}
              onChange={(e) => setPosition(e.target.value)}
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
              value={tasks}
              onChange={(e) => setTasks(e.target.value)}
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
        <button type="submit">Add work</button>
      </form>
    </div>
  );
};

export default WorksEditor;
