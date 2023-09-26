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

  // General Info Updaters

  function updateName(e) {
    const newInfo = { ...generalInfo, name: e.target.value };
    setGeneralInfo(newInfo);
  }

  function updateAddress(e) {
    const newInfo = { ...generalInfo, address: e.target.value };
    setGeneralInfo(newInfo);
  }

  function updateEmail(e) {
    const newInfo = { ...generalInfo, email: e.target.value };
    setGeneralInfo(newInfo);
  }

  function updatePhone(e) {
    const newInfo = { ...generalInfo, phone: e.target.value };
    setGeneralInfo(newInfo);
  }

  // Education Updaters

  function handleRemoveEducation(e) {
    e.preventDefault();
    const updatedArr = education.slice(0, -1);
    setEducation(updatedArr);
  }

  function handleAddEducation(newEducation) {
    const updatedArr = [...education, newEducation];
    setEducation(updatedArr);
  }

  function getObjById(arr, id) {
    return arr.filter((obj) => obj.id === id)[0];
  }

  function updateStudy(e, id) {
    const updatedArr = [...education];
    const obj = getObjById(updatedArr, id);
    obj.study = e.target.value;
    setEducation(updatedArr);
  }

  function updateSchool(e, id) {
    const updatedArr = [...education];
    const obj = getObjById(updatedArr, id);
    obj.school = e.target.value;
    setEducation(updatedArr);
  }

  function updateStartEducation(e, id) {
    const updatedArr = [...education];
    const obj = getObjById(updatedArr, id);
    obj.startDate = e.target.value;
    setEducation(updatedArr);
  }

  function updateEndEducation(e, id) {
    const updatedArr = [...education];
    const obj = getObjById(updatedArr, id);
    obj.endDate = e.target.value;
    setEducation(updatedArr);
  }

  function updateIsCurrentEducation(e, id) {
    const updatedArr = [...education];
    const obj = getObjById(updatedArr, id);
    obj.isCurrent = obj.isCurrent ? false : true;
    setEducation(updatedArr);
  }

  const generalInfoFuncs = {
    name: (e) => updateName(e),
    address: (e) => updateAddress(e),
    email: (e) => updateEmail(e),
    phone: (e) => updatePhone(e),
    removeEducation: (e) => handleRemoveEducation(e),
    addEducation: (newEducation) => handleAddEducation(newEducation),
    study: (e, id) => updateStudy(e, id),
    school: (e, id) => updateSchool(e, id),
    educationStart: (e, id) => updateStartEducation(e, id),
    educationEnd: (e, id) => updateEndEducation(e, id),
    educationIsCurrent: (e, id) => updateIsCurrentEducation(e, id),
    removeExperience: (e) => {
      e.preventDefault();
      const updatedArr = experience.slice(0, -1);
      setExperience(updatedArr);
    },
    addExperience: (newExperience) => {
      const updatedArr = [...experience, newExperience];
      setExperience(updatedArr);
    },
    title: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.title = e.target.value;
      setExperience(updatedArr);
    },
    company: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.company = e.target.value;
      setExperience(updatedArr);
    },
    experienceStart: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.startDate = e.target.value;
      setExperience(updatedArr);
    },
    experienceEnd: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.endDate = e.target.value;
      setExperience(updatedArr);
    },
    experienceIsCurrent: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.isCurrent = obj.isCurrent ? false : true;
      setExperience(updatedArr);
    },
    responsibilities: (e, id) => {
      const updatedArr = [...experience];
      const obj = getObjById(updatedArr, id);
      obj.responsibilities = e.target.value;
      setExperience(updatedArr);
    },
  };

  return (
    <>
      <Header />
      <FormSection
        generalInfo={generalInfo}
        education={education}
        experience={experience}
        onChange={generalInfoFuncs}
      />
      <ViewSection
        generalInfo={generalInfo}
        education={education}
        experience={experience}
      />
    </>
  );
}

export default App;
