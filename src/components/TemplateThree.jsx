export default function TemplateThree({ data }) {
  return (
    <div className="template minimal">
      <h2>{data.name}</h2>
      <p>{data.email}</p>

      <p>{data.education}</p>
      <p>{data.experience}</p>

      <p>{data.skills.join(", ")}</p>
    </div>
  );
}