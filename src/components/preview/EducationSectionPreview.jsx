function EducationSectionPreview({ education }) {
  return (
    <div className="education-section-preview">
      <p>{education.study}</p>
      <p>{education.school}</p>

      <p>{`${education.startDate} - ${
        education.isCurrent ? "present" : education.endDate
      }`}</p>
    </div>
  );
}

export default EducationSectionPreview;
