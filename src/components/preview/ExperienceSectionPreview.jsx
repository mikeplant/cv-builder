function ExperienceSectionPreview({ experience, formatDate }) {
  function getEndDate() {
    if (experience.endDate || experience.isCurrent) {
      return (
        " - " +
        (experience.isCurrent ? "Present" : formatDate(experience.endDate))
      );
    }
  }

  return (
    <div className="preview-section experience-preview-section">
      <div className="experience-title-container">
        <div>
          <p className="preview-section-title">{experience.title}</p>
          <p>{experience.company}</p>
        </div>
        <p className="push-right">
          {experience.startDate ? formatDate(experience.startDate) : ""}
          {getEndDate()}
        </p>
      </div>
      {experience.responsibilities ? (
        <h2 className="subheading">Responsibilites</h2>
      ) : (
        ""
      )}

      <p className="exp-responsibilities">{experience.responsibilities}</p>
    </div>
  );
}
export default ExperienceSectionPreview;
