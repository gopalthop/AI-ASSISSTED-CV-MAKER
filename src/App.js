import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Builder from "./pages/Builder";

function App() {
  return (
    <BrowserRouter>
      {/* Wrapping the entire view in a motion.div ensures 
        a smooth fade-in when the app first loads.
      */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{ minHeight: "100vh" }} // Ensures the animation covers the screen
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </motion.div>
    </BrowserRouter>
  );
}

export default App;