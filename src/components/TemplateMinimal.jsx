export default function TemplateMinimal({ data }) {
  return (
    <div className="a4-page minimal-layout">

      <div className="header">
        <h1>{data.name}</h1>
        <p>{data.email}</p>
      </div>

      <div className="section">
        <h4>Education</h4>
        <p>{data.education}</p>
      </div>

      <div className="section">
        <h4>Experience</h4>
        <p>{data.experience}</p>
      </div>

      <div className="section">
        <h4>Skills</h4>
        <p>{data.skills.join(", ")}</p>
      </div>

    </div>
  );
}