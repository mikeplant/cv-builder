import CvPreview from "./CvPreview";
import "../../styles/ViewSection.css";

function ViewSection({ generalInfo, education, experience, options }) {
  return (
    <section className="view-section">
      <CvPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        options={options}
      />
    </section>
  );
}

export default ViewSection;
