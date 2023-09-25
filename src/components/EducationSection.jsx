import "../styles/EducationSection.css";

function EducationSection({ edu }) {
  return (
    <div>
      <label>
        Field of Study:
        <input type="text" defaultValue={edu.study}></input>
      </label>
      <label>
        School Name:
        <input type="text" defaultValue={edu.school}></input>
      </label>
      <div className="education-dates-input">
        <label>
          From:
          <input type="date" defaultValue={edu.startDate}></input>
        </label>
        <label>
          To:
          <input type="date" defaultValue={edu.endDate}></input>
        </label>
        <label>
          Current?
          <input type="checkbox"></input>
        </label>
      </div>
      <div className="divider-line-light"></div>
    </div>
  );
}

export default EducationSection;
