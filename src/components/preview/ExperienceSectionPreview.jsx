function ExperienceSectionPreview({ experience }) {
  function getEndDate() {
    if (experience.endDate || experience.isCurrent) {
      return " - " + (experience.isCurrent ? "Present" : experience.endDate);
    }
  }

  return (
    <div className="education-section-preview">
      <p>{experience.title}</p>
      <p>{experience.company}</p>
      <p>
        {experience.startDate}
        {getEndDate()}
      </p>
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
