import "../styles/CvPreview.css";

function CvPreview({ generalInfo }) {
  return (
    <div className="cv-preview-container">
      <div className="preview-header">
        {generalInfo.name}
        <br />
        {generalInfo.address}
        <br />
        {generalInfo.email}
        <br />
        {generalInfo.phone}
      </div>
    </div>
  );
}

export default CvPreview;
