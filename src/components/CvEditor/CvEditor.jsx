import PersonalEditor from "../PersonalEditor/PersonalEditor";
import EducationEditor from "../EducationEditor/EducationEditor";
import WorksEditor from "../WorksEditor/WorksEditor";

function CvEditor({data, handleInput, onSubmit}) {
  const personalData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
    handleInput: handleInput,
  }
  return (
    <div className="cv-editor">
      <div className="editors">
        <PersonalEditor personal={personalData}/>
        <EducationEditor onSubmit={onSubmit}/>
        <WorksEditor onSubmit={onSubmit}/>
      </div>
    </div>
  );
}

export default CvEditor;
