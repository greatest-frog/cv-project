import PersonalEditor from "../PersonalEditor/PersonalEditor";
import EducationEditor from "../EducationEditor/EducationEditor";
import WorksEditor from "../WorksEditor/WorksEditor";

function CvEditor({ data, methods }) {
  const personalData = {
    name: data.name,
    surname: data.surname,
    email: data.email,
    phone: data.phone,
  };

  return (
    <div className="cv-editor">
      <div className="editors">
        <PersonalEditor
          personal={personalData}
          methods={{
            setName: methods.setName,
            setSurname: methods.setSurname,
            setEmail: methods.setEmail,
            setPhone: methods.setPhone,
          }}
        />
        <EducationEditor addEducation={methods.addEducation} />
        <WorksEditor addWork={methods.addWork} />
      </div>
    </div>
  );
}

export default CvEditor;
