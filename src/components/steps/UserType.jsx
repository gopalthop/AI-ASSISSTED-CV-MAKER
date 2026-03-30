import { motion } from "framer-motion";

const types = [
 "Student → 🎓"  ,
"Developer → 💻 " ,
"Designer → 🎨"  ,
"Executive → 🧠 " ,
"Freelancer → 🧑‍💼 " ,
"Academic → 📚"  
];

export default function UserType({ data, setData }) {
  return (
    <div>
      <h2>Select Your Profile Type</h2>

      <div className="type-grid">
        {types.map((type) => (
          <motion.div
            key={type}
            className={`type-card ${
              data.userType === type ? "active" : ""
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() =>
              setData({ ...data, userType: type })
            }
          >
            {type}
          </motion.div>
        ))}
      </div>
    </div>
  );
}