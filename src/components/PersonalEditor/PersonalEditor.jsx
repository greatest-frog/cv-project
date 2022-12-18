function PersonalEditor({ personal }) {
  const { name, surname, email, phone, handleInput } = personal;
  return (
    <div className="personal-editor">
      <div className="nameInput">
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => handleInput(e)}
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
            onChange={(e) => handleInput(e)}
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
            onChange={(e) => handleInput(e)}
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
            onChange={(e) => handleInput(e)}
          />
        </label>
      </div>
    </div>
  );
}

export default PersonalEditor;
