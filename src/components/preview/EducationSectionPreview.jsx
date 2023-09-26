function EducationSectionPreview({ education, formatDate }) {
  function getEndDate() {
    if (education.endDate || education.isCurrent) {
      return (
        " - " +
        (education.isCurrent ? "Present" : formatDate(education.endDate))
      );
    }
  }

  return (
    <div className="preview-section">
      <p className="preview-section-title">{education.study}</p>
      <p>{education.school}</p>
      <p>
        {education.startDate ? formatDate(education.startDate) : ""}
        {getEndDate()}
      </p>
    </div>
  );
}
export default EducationSectionPreview;
