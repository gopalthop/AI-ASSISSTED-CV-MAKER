export default function Education({ data, setData }) {
  return (
    <div>
      <h2>Education</h2>

      <textarea
        name="education"
        placeholder="Your education details"
        value={data.education}
        onChange={(e) =>
          setData({ ...data, education: e.target.value })
        }
      />
    </div>
  );
}