export default function TemplateTwo({ data }) {
  return (
    <div className="template classic">
      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>

      <hr />

      <h3>Education</h3>
      <p>{data.education}</p>

      <h3>Experience</h3>
      <p>{data.experience}</p>

      <h3>Skills</h3>
      <ul>
        {data.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}