import { useState } from "react";
import html2pdf from "html2pdf.js";
import { motion, AnimatePresence } from "framer-motion";
import TemplateSelect from "../components/steps/TemplateSelect";

// Components
import UserType from "../components/steps/UserType";
import Stepper from "../components/Stepper";
import PersonalInfo from "../components/steps/PersonalInfo";
import Education from "../components/steps/Education";
import Experience from "../components/steps/Experience";
import Skills from "../components/steps/Skills";
import Preview from "../components/Preview";

// Config
import { userTypes } from "../configuration/userTypes";

export default function Builder() {
  const [step, setStep] = useState(0);

  const [cvData, setCvData] = useState({
    userType: "",
    template: "",
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: [],
  });
  console.log("Template selected:", cvData.template);

  // 📄 PDF Download
  const downloadPDF = () => {
    const element = document.getElementById("cv-preview");
    if (element) {
      html2pdf().from(element).save("cv.pdf");
    }
  };

  // 🧠 Dynamic Steps (SAFE VERSION)
  const getDynamicSteps = () => {
    const selected = userTypes.find(
      (u) => u.type === cvData.userType
    );

    if (!selected) return [];

    return selected.sections.map((section, index) => {
      switch (section) {
        case "projects":
          return (
            <div key={index}>
              <h2>Projects</h2>
              <textarea
                placeholder="Describe your projects..."
                onChange={(e) =>
                  setCvData({
                    ...cvData,
                    projects: e.target.value,
                  })
                }
              />
            </div>
          );

        case "techStack":
          return (
            <div key={index}>
              <h2>Tech Stack</h2>
              <input
                placeholder="e.g. React, Node, MongoDB"
                onChange={(e) =>
                  setCvData({
                    ...cvData,
                    techStack: e.target.value,
                  })
                }
              />
            </div>
          );

        case "portfolio":
          return (
            <div key={index}>
              <h2>Portfolio</h2>
              <input
                placeholder="Portfolio link"
                onChange={(e) =>
                  setCvData({
                    ...cvData,
                    portfolio: e.target.value,
                  })
                }
              />
            </div>
          );

        default:
          return null;
      }
    });
  };

  // 🧾 Steps Flow
  const steps = [
    <UserType data={cvData} setData={setCvData} />,
    <TemplateSelect data={cvData} setData={setCvData} />, 
    <PersonalInfo data={cvData} setData={setCvData} />,
    <Education data={cvData} setData={setCvData} />,
    <Experience data={cvData} setData={setCvData} />,
    <Skills data={cvData} setData={setCvData} />,
    ...getDynamicSteps(),
    <Preview cvData={cvData} />,
  ];

  return (
    <div className="builder">
      {/* Step Indicator */}
      <Stepper step={step} />

      {/* Animated Step */}
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          className="glass-card"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {steps[step]}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="nav-buttons">
        {step > 0 && (
          <button onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}

        {step < steps.length - 1 ? (
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              if (step === 0 && !cvData.userType) {
                alert("Please select a user type");
                return;
              }

               if (step === 1 && !cvData.template) {
    alert("Select a template");
    return;
  }
              setStep(step + 1);
            }}
          >
            Next
          </motion.button>
        ) : (
          <button onClick={downloadPDF}>
            Download CV
          </button>
        )}
      </div>
    </div>
  );
}
