function PersonalPreview({ personal }) {
  const { name, surname, email, phone } = personal;
  return (
    <div className="personal-preview">
      <div className="name-preview">
        {name} {surname}
      </div>
      <div className="contacts">
        <div className="email">
          <img
            src="./resources/images/email.png"
            alt="email icon"
            className="icon"
          />
          {email}
        </div>
        <div className="phone">
          <img
            src="./resources/images/phone.png"
            alt="phone icon"
            className="icon"
          />
          {phone}
        </div>
      </div>
    </div>
  );
}

export default PersonalPreview;
