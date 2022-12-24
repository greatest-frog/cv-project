import EducationPreview from "../EducationPreview/EducationPreview";
import PersonalPreview from "../PersonalPreview/PersonalPreview";
import WorksPreview from "../WorksPreview/WorksPreview";

function CvPreview({ data }) {
  const personalInfo = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
  };
  return (
    <div className="cv-preview">
      <span className="heading">CV Preview</span>
      <PersonalPreview personal={personalInfo} />
      <EducationPreview education={data.education} />
      <WorksPreview works={data.works} />
    </div>
  );
}

export default CvPreview;
