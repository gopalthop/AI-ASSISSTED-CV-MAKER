export default function Skills({ data, setData }) {

  const handleSkills = (e) => {
    setData({
      ...data,
      skills: e.target.value.split(",")
    });
  };

  return (
    <div>
      <h2>Skills</h2>

      <input
        placeholder="e.g. React, Node, MongoDB"
        value={data.skills.join(",")}
        onChange={handleSkills}
      />
    </div>
  );
}