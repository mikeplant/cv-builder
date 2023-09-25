import CvPreview from "./CvPreview";
import "../styles/ViewSection.css";

function ViewSection({ generalInfo, education }) {
  return (
    <section className="view-section">
      <CvPreview generalInfo={generalInfo} education={education} />
    </section>
  );
}

export default ViewSection;
