function EducationPreview({ education }) {
  return (
    <div className="education-preview">
      <h3>Education</h3>
      <ul className="list">
        {education.map((place, index) => {
          return (
            <li key={index} className="list_item">
              <h4 className="university-name">{place.universityName}</h4>
              <div className="study-title">{place.degree}</div>
              <div className="education-date date">
                <div className="date-start">{place.startDate}</div>
                &ndash;
                <div className="date-end">{place.endDate}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EducationPreview;
