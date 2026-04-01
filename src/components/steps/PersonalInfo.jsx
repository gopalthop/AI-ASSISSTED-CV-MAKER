export default function PersonalInfo({ data, setData }) {

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setData({ ...data, profileImage: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  }}
/>

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

      <button onClick={() => setData({...data, theme: "blue"})}>Blue</button>
<button onClick={() => setData({...data, theme: "green"})}>Green</button>
<button onClick={() => setData({...data, theme: "dark"})}>Dark</button>
    </div>
  );
}