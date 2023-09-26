import "../styles/ExperienceSection.css";

function ExperienceSection({ exp, onChange }) {
  return (
    <div>
      <label>
        Job Title:
        <input
          type="text"
          defaultValue={exp.title}
          onChange={(e) => onChange.title(e, exp.id)}
        ></input>
      </label>
      <label>
        Company:
        <input
          type="text"
          defaultValue={exp.company}
          onChange={(e) => onChange.company(e, exp.id)}
        ></input>
      </label>
      <div className="experience-dates-input">
        <label>
          From:
          <input
            type="date"
            defaultValue={exp.startDate}
            onChange={(e) => onChange.experienceStart(e, exp.id)}
          ></input>
        </label>
        <label>
          To:
          <input
            type="date"
            defaultValue={exp.endDate}
            disabled={exp.isCurrent}
            onChange={(e) => onChange.experienceEnd(e, exp.id)}
          ></input>
        </label>
        <label>
          Current?
          <input
            type="checkbox"
            defaultChecked={exp.isCurrent}
            onChange={(e) => onChange.experienceIsCurrent(e, exp.id)}
          ></input>
        </label>
      </div>
      <label>
        Responsibilities:
        <textarea
          className="responsibilities-input"
          defaultValue={exp.responsibilities}
          onChange={(e) => onChange.responsibilities(e, exp.id)}
        ></textarea>
      </label>
      <div className="divider-line-light"></div>
    </div>
  );
}

export default ExperienceSection;
