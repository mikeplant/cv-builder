import CvPreview from "./CvPreview";
import "../styles/ViewSection.css";

function ViewSection({ generalInfo }) {
  return (
    <section className="view-section">
      <CvPreview generalInfo={generalInfo} />
    </section>
  );
}

export default ViewSection;
