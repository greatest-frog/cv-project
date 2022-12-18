function PersonalEditor({ personal }) {
    const {name, surname, email, phone, handleInput} = personal;
    return (
        <div className="personal-editor">
            <div className="nameInput">
                <label htmlFor="nameInput">Name</label>
                <input type="text" name="name" id="nameInput" value={name} onChange={(e) => handleInput(e)}/>
            </div>
            <div className="surnameInput">
                <label htmlFor="surnameInput">Surname</label>
                <input type="text" name="surname" id="surnameInput" value={surname} onChange={(e) => handleInput(e)}/>
            </div>
            <div className="emailInput">
                <label htmlFor="emailInput">Email</label>
                <input type="email" name="email" id="emailInput" value={email} onChange={(e) => handleInput(e)}/>
            </div>
            <div className="phoneInput">
                <label htmlFor="phoneInput">Phone</label>
                <input type="tel" name="phone" id="phoneInput" value={phone} onChange={(e) => handleInput(e)}/>
            </div>
        </div>
    )
}

export default PersonalEditor;
