import CvPreview from "./components/CvPreview/CvPreview";
import CvEditor from "./components/CvEditor/CvEditor";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState([]);
  const [works, setWorks] = useState([]);

  return (
    <div className="app">
      <CvEditor
        data={{
          name,
          surname,
          email,
          phone,
        }}
        methods={{
          setName: (name) => setName(name),
          setSurname: (surname) => setSurname(surname),
          setEmail: (email) => setEmail(email),
          setPhone: (phone) => setPhone(phone),
          addEducation: (e) => setEducation(education.concat(e)),
          addWork: (work) => setWorks(works.concat(work)),
        }}
      />
      <CvPreview
        data={{
          name,
          surname,
          email,
          phone,
          education,
          works,
        }}
      />
    </div>
  );
}

export default App;
