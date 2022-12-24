function WorksPreview({ works }) {
  return (
    <div className="works-preview">
      <h3>Works</h3>
      <ul className="list">
        {works.map((work, index) => {
          return (
            <li key={index} className="list_item">
              <h4 className="company-name">{work.companyName}</h4>
              <div className="position">{work.position}</div>
              <div className="tasks">{work.tasks}</div>
              <div className="work-date date">
                <div className="date-start">{work.startDate}</div>
                &ndash;
                <div className="date-end">{work.endDate}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WorksPreview;
