import "../styles/ExperienceSection.css";

function ExperienceSection({ exp, onChange }) {
  return (
    <div>
      <label>
        Job Title:
        <input
          data-type="title"
          type="text"
          defaultValue={exp.title}
          onChange={(e) => onChange.updateExperienceField(e, exp.id)}
        ></input>
      </label>
      <label>
        Company:
        <input
          data-type="company"
          type="text"
          defaultValue={exp.company}
          onChange={(e) => onChange.updateExperienceField(e, exp.id)}
        ></input>
      </label>
      <div className="experience-dates-input">
        <label>
          From:
          <input
            data-type="startDate"
            type="month"
            min={"1900-01"}
            max={exp.endDate}
            defaultValue={exp.startDate}
            onChange={(e) => onChange.updateExperienceField(e, exp.id)}
          ></input>
        </label>
        <label>
          To:
          <input
            data-type="endDate"
            type="month"
            min={exp.startDate}
            defaultValue={exp.endDate}
            disabled={exp.isCurrent}
            onChange={(e) => onChange.updateExperienceField(e, exp.id)}
          ></input>
        </label>
        <label className="push-right">
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
          data-type="responsibilities"
          className="responsibilities-input"
          defaultValue={exp.responsibilities}
          onChange={(e) => onChange.updateExperienceField(e, exp.id)}
        ></textarea>
      </label>
      <div className="divider-line-light"></div>
    </div>
  );
}

export default ExperienceSection;
