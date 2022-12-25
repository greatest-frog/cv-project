function PersonalEditor({ personal, methods }) {
  const { name, surname, email, phone } = personal;
  const { setName, setSurname, setEmail, setPhone } = methods;
  return (
    <div className="personal-editor editor">
      <h2>Personal information</h2>
      <div className="nameInput">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div className="surnameInput">
        <label>
          Surname
          <input
            type="text"
            name="surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
      </div>
      <div className="emailInput">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="phoneInput">
        <label>
          Phone
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
      </div>
    </div>
  );
}

export default PersonalEditor;
