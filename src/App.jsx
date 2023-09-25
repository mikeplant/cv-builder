import "./App.css";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ViewSection from "./components/ViewSection";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    address: "123 Some Road, Sometown, Countyshire, AP11 4CE",
    email: "johndoe@email.com",
    phone: "01234 567890",
  });
  const [education, setEducation] = useState([
    {
      id: uuidv4(),
      study: "Bachelors Degree in Mathematics",
      school: "King's College, London",
      startDate: "2005-09-23",
      endDate: "2009-07-25",
      isCurrent: false,
    },
    {
      id: uuidv4(),
      study: "Master's Degree in Mathematics",
      school: "UWE Bristol",
      startDate: "2009-09-23",
      endDate: "2014-07-25",
      isCurrent: true,
    },
  ]);

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
    const updatedArr = education;
    const obj = getObjById(updatedArr, id);
    obj.study = e.target.value;
    setEducation(updatedArr);
  }

  function updateSchool(e, id) {
    const updatedArr = education;
    const obj = getObjById(updatedArr, id);
    obj.school = e.target.value;
    setEducation(updatedArr);
  }

  function updateStartEducation(e, id) {
    const updatedArr = education;
    const obj = getObjById(updatedArr, id);
    obj.startDate = e.target.value;
    setEducation(updatedArr);
  }

  function updateEndEducation(e, id) {
    const updatedArr = education;
    const obj = getObjById(updatedArr, id);
    obj.endDate = e.target.value;
    setEducation(updatedArr);
  }

  function updateIsCurrentEducation(e, id) {
    const updatedArr = education;
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
  };

  return (
    <>
      <Header />
      <FormSection
        generalInfo={generalInfo}
        education={education}
        onChange={generalInfoFuncs}
      />
      <ViewSection generalInfo={generalInfo} education={education} />
    </>
  );
}

export default App;
