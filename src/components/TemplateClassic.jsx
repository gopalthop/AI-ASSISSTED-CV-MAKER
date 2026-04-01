export default function TemplateClassic({ data }) {
  return (
    <div className="a4-page classic-layout">

      <h1>{data.name}</h1>
      <p>{data.email} | {data.phone}</p>

      <hr />

      <section>
        <h3>Education</h3>
        <p>{data.education}</p>
      </section>

      <section>
        <h3>Experience</h3>
        <p>{data.experience}</p>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          {data.skills.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </section>

    </div>
  );
}