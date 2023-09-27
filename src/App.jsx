import "./App.css";
import demoData from "./demoData";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ViewSection from "./components/ViewSection";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState(demoData.generalInfo);
  const [education, setEducation] = useState(demoData.education);
  const [experience, setExperience] = useState(demoData.experience);
  const [colors, setColors] = useState({
    backgroundColor: "#0F1B4D",
    textColor: "#ffffff",
  });

  function getObjById(arr, id) {
    return arr.find((obj) => obj.id === id);
  }

  const updaterFuncs = {
    // General Info Updaters
    updateGeneralInfo: (e) => {
      const key = e.target.dataset.type;
      const value = e.target.value;
      const newInfo = { ...generalInfo, [key]: value };
      setGeneralInfo(newInfo);
    },
    changeColor: (e) => {
      const key = e.target.dataset.type;
      const value = e.target.value;
      const updatedColors = { ...colors, [key]: value };
      setColors(updatedColors);
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
          colors={colors}
        />
        <ViewSection
          generalInfo={generalInfo}
          education={education}
          experience={experience}
          colors={colors}
        />
      </div>
    </>
  );
}

export default App;
