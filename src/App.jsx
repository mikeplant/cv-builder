import demoData from "./demoData";
import Header from "./components/Header";
import FormSection from "./components/form/FormSection";
import ViewSection from "./components/preview/ViewSection";
import { useState } from "react";
import generatePDF from "react-to-pdf";

function App() {
  const [generalInfo, setGeneralInfo] = useState(demoData.generalInfo);
  const [education, setEducation] = useState(demoData.education);
  const [experience, setExperience] = useState(demoData.experience);
  const [options, setOptions] = useState({
    backgroundColor: "#0F1B4D",
    textColor: "#ffffff",
    font: '"Raleway", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif"',
    isCollapsed: true,
  });

  function getObjById(arr, id) {
    return arr.find((obj) => obj.id === id);
  }

  const optionHandlers = {
    handleClearAll: (e) => {
      e.preventDefault();
      setGeneralInfo({});
      setEducation([]);
      setExperience([]);
    },
    handleLoadDemo: (e) => {
      e.preventDefault();
      setGeneralInfo(demoData.generalInfo);
      setEducation(demoData.education);
      setExperience(demoData.experience);
    },
    handleExport: (e) => {
      e.preventDefault();
      const target = document.querySelector(".cv-preview-container");
      generatePDF(() => target, {
        method: "save",
        filename: `${generalInfo.name} - CV.pdf`,
      });
    },
    changeColor: (e) => {
      const key = e.target.dataset.type;
      const value = e.target.value;
      const updatedOptions = { ...options, [key]: value };
      setOptions(updatedOptions);
    },
    changeFont: (e) => {
      const type = e.target.value;
      const newFont =
        type === "serif"
          ? '"Times New Roman", Times, serif'
          : type === "sans-serif"
          ? "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
          : type === "mono"
          ? "'Courier New', Courier, monospace"
          : '"Raleway", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      const updatedOptions = { ...options, font: newFont };
      setOptions(updatedOptions);
    },
    toggleCollapsed: () => {
      const boolean = options.isCollapsed ? false : true;
      const updatedArr = { ...options, isCollapsed: boolean };
      setOptions(updatedArr);
    },
  };

  const updaterFuncs = {
    // General Info Updaters
    updateGeneralInfo: (e) => {
      const key = e.target.dataset.type;
      const value = e.target.value;
      const newInfo = { ...generalInfo, [key]: value };
      setGeneralInfo(newInfo);
    },

    // Education Updaters
    deleteEducation: (e, id) => {
      e.preventDefault();
      const updatedArr = education.filter((edu) => edu.id !== id);
      setEducation(updatedArr);
    },
    addEducation: (newEducation) => {
      const updatedArr = [...education, newEducation];
      setEducation(updatedArr);
    },
    updateEducationField: (e, id) => {
      const updatedArr = [...education];
      const obj = getObjById(updatedArr, id);
      const key = e.target.dataset.type;
      obj[key] = e.target.value;
      setEducation(updatedArr);
    },
    educationIsCurrent: (e, id) => {
      const updatedArr = [...education];
      const obj = getObjById(updatedArr, id);
      obj.isCurrent = obj.isCurrent ? false : true;
      setEducation(updatedArr);
    },
    // Experience updaters
    deleteExperience: (e, id) => {
      e.preventDefault();
      const updatedArr = experience.filter((exp) => exp.id !== id);
      setExperience(updatedArr);
    },
    addExperience: (newExperience) => {
      const updatedArr = [...experience, newExperience];
      setExperience(updatedArr);
    },
    updateExperienceField: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      const key = e.target.dataset.type;
      obj[key] = e.target.value;
      setExperience(updatedArr);
    },
    experienceIsCurrent: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.isCurrent = obj.isCurrent ? false : true;
      setExperience(updatedArr);
    },
    // Collapsable Funcs
    toggleCollapsedEducation: (id) => {
      const updatedArr = [...education];
      const obj = getObjById(updatedArr, id);
      obj.isCollapsed = obj.isCollapsed ? false : true;
      setEducation(updatedArr);
    },
    toggleCollapsedExperience: (id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.isCollapsed = obj.isCollapsed ? false : true;
      setExperience(updatedArr);
    },
  };

  return (
    <>
      <div className="wrapper">
        <Header />
        <FormSection
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          onChange={updaterFuncs}
          optionHandlers={optionHandlers}
          options={options}
        />
        <ViewSection
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          options={options}
        />
      </div>
    </>
  );
}

export default App;
