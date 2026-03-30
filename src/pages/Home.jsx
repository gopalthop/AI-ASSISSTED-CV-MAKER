import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="home">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Build Your Professional CV in Minutes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Create beautiful resumes with modern templates and download instantly.
      </motion.p>

      <motion.a
        href="/builder"
        className="cta-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Building →
      </motion.a>

    </div>
  );
}