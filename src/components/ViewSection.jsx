import CvPreview from "./CvPreview";
import "../styles/ViewSection.css";

function ViewSection({ generalInfo, education, experience, colors }) {
  return (
    <section className="view-section">
      <CvPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        colors={colors}
      />
    </section>
  );
}

export default ViewSection;
