import "../styles/ExperienceSection.css";

function ExperienceSection() {
  return (
    <div>
      <label>
        Job Title:
        <input type="text"></input>
      </label>
      <label>
        Company:
        <input type="text"></input>
      </label>
      <div className="experience-dates-input">
        <label>
          From:
          <input type="date"></input>
        </label>
        <label>
          To:
          <input type="date"></input>
        </label>
        <label>
          Current?
          <input type="checkbox"></input>
        </label>
      </div>
      <label>
        Responsibilities:
        <textarea className="responsibilities-input"></textarea>
      </label>
      <div className="divider-line-light"></div>
    </div>
  );
}

export default ExperienceSection;
