function PersonalPreview({ personal }) {
  const { name, surname, email, phone } = personal;
  return (
    <div className="personal-preview">
      <h2>
        {name} {surname}
      </h2>
      <div className="contacts">
        <div className="email">{email}</div>
        <div className="phone">{phone}</div>
      </div>
    </div>
  );
}

export default PersonalPreview;
