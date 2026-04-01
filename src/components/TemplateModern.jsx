import { FaEnvelope, FaPhone } from "react-icons/fa";
import { themes } from "../configuration/themes";

export default function TemplateModern({ data }) {

  const theme = themes[data.theme];

  return (
    <div className="a4-page modern-layout">

      {/* HEADER */}
      <div className="header">
        <div>
          <h1 style={{ color: theme.primary }}>{data.name}</h1>
          <p><FaEnvelope /> {data.email}</p>
          <p><FaPhone /> {data.phone}</p>
        </div>

        {data.profileImage && (
          <img src={data.profileImage} className="profile-img" />
        )}
      </div>

      {/* CONTENT */}
      <h3 style={{ color: theme.primary }}>Education</h3>
      <p>{data.education}</p>

      <h3 style={{ color: theme.primary }}>Experience</h3>
      <p>{data.experience}</p>

      <h3 style={{ color: theme.primary }}>Skills</h3>
      <ul>
        {data.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

    </div>
  );
}