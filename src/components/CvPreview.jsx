import "../styles/CvPreview.css";
import "./preview/HeaderPreview";
import { v4 as uuidv4 } from "uuid";
import HeaderPreview from "./preview/HeaderPreview";
import EducationSectionPreview from "./preview/EducationSectionPreview";

function CvPreview({ generalInfo, education }) {
  return (
    <div className="cv-preview-container">
      <HeaderPreview generalInfo={generalInfo} />
      <div className="preview-inner">
        {education.length > 0 ? (
          <section className="preview-education-section">
            <h1 className="preview-section-header">Education</h1>
            {education.map((element) => {
              return (
                <EducationSectionPreview key={uuidv4()} education={element} />
              );
            })}
          </section>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default CvPreview;
