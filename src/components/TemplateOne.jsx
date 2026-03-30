export default function TemplateOne({ data }) {
  return (
    <div className="template modern">
      <h1 style={{ color: "#6c63ff" }}>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>

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