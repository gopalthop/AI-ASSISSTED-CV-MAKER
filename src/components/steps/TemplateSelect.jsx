import { motion } from "framer-motion";
import modernImg from "../../assets/templates/modern.png";
import classicImg from "../../assets/templates/classic.png";
import minimalImg from "../../assets/templates/minimal.png";

const templates = [
  {
    id: "modern",
    name: "Modern",
    image: modernImg,
  },
  {
    id: "classic",
    name: "Classic",
    image: classicImg,
  },
  {
    id: "minimal",
    name: "Minimal",
    image: minimalImg,
  },
];


export default function TemplateSelect({ data, setData }) {
  return (
    <div>
      <h2>Select a Template</h2>

      <div className="template-grid">
  {templates.map((tpl) => (
    <motion.div
      key={tpl.id}
      className={`template-card ${
        data.template === tpl.id ? "active" : ""
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() =>
        setData({ ...data, template: tpl.id })
      }
    >
      <img src={tpl.image} alt={tpl.name} />

      <p>{tpl.name}</p>
    </motion.div>
  ))}
</div>
    </div>
  );
}