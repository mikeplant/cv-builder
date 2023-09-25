import "../styles/CvPreview.css";

function CvPreview({ generalInfo, education }) {
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
      <div>
        {education.map((element) => {
          element.study;
        })}
      </div>
    </div>
  );
}

export default CvPreview;
