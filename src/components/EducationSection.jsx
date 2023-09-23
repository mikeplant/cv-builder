import "../styles/EducationSection.css";

function EducationSection() {
  return (
    <div>
      <label>
        Field of Study:
        <input type="text"></input>
      </label>
      <label>
        School Name:
        <input type="text"></input>
      </label>
      <div className="education-dates-input">
        <label>
          From:
          <input type="date"></input>
        </label>
        <label>
          To:
          <input type="date"></input>
        </label>
      </div>
    </div>
  );
}

export default EducationSection;
