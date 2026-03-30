export default function Stepper({ step }) {
  const labels = ["Personal", "Education", "Experience", "Skills", "Preview"];

  return (
    <div className="stepper">
      {labels.map((label, index) => (
        <div key={index} className={step === index ? "active" : ""}>
          {label}
        </div>
      ))}
    </div>
  );
}