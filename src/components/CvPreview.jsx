import "../styles/CvPreview.css";
import "./preview/HeaderPreview";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import HeaderPreview from "./preview/HeaderPreview";
import EducationSectionPreview from "./preview/EducationSectionPreview";
import ExperienceSectionPreview from "./preview/ExperienceSectionPreview";

function CvPreview({ generalInfo, education, experience, colors }) {
  function getFormattedDate(date) {
    return format(new Date(date), "MM/yyyy");
  }

  return (
    <div className="cv-preview-container">
      <HeaderPreview generalInfo={generalInfo} colors={colors} />
      <div className="preview-inner">
        {education.length > 0 ? (
          <section className="preview-education-section">
            <h1 className="preview-section-header">Education</h1>
            {education.map((element) => {
              return (
                <EducationSectionPreview
                  key={uuidv4()}
                  education={element}
                  formatDate={(date) => getFormattedDate(date)}
                />
              );
            })}
          </section>
        ) : (
          ""
        )}
        {experience.length > 0 ? (
          <section className="preview-experience-section">
            <h1 className="preview-section-header">Experience</h1>
            {experience.map((element) => {
              return (
                <ExperienceSectionPreview
                  key={uuidv4()}
                  experience={element}
                  formatDate={(date) => getFormattedDate(date)}
                />
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
