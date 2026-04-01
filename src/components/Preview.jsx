import TemplateOne from "./TemplateMinimal";
import TemplateTwo from "./TemplateClassic";
import TemplateThree from "./TemplateModern";

export default function Preview({ cvData }) {

  console.log("Preview template:", cvData.template);

  return (
    <div id="cv-preview">

      {cvData.template === "modern" && (
        <TemplateOne data={cvData} />
      )}

      {cvData.template === "classic" && (
        <TemplateTwo data={cvData} />
      )}

      {cvData.template === "minimal" && (
        <TemplateThree data={cvData} />
      )}

      {!cvData.template && <p>Select a template</p>}

    </div>
  );
}