export default function Experience({ data, setData }) {
  return (
    <div>
      <h2>Experience</h2>

      <textarea
        name="experience"
        placeholder="Your work experience"
        value={data.experience}
        onChange={(e) =>
          setData({ ...data, experience: e.target.value })
        }
      />
    </div>
  );
}