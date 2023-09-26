import CvPreview from "./CvPreview";
import "../styles/ViewSection.css";

function ViewSection({ generalInfo, education, experience }) {
  return (
    <section className="view-section">
      <CvPreview
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </section>
  );
}

export default ViewSection;
