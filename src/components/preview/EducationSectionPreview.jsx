function EducationSectionPreview({ education }) {
  function getEndDate() {
    if (education.endDate || education.isCurrent) {
      return " - " + (education.isCurrent ? "Present" : education.endDate);
    }
  }

  return (
    <div className="education-section-preview">
      <p>{education.study}</p>
      <p>{education.school}</p>
      <p>
        {education.startDate}
        {getEndDate()}
      </p>
    </div>
  );
}
export default EducationSectionPreview;
