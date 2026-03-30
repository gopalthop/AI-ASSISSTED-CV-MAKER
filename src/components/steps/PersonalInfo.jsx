export default function PersonalInfo({ data, setData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <input
        name="name"
        placeholder="Name"
        value={data.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        value={data.phone}
        onChange={handleChange}
      />
    </div>
  );
}