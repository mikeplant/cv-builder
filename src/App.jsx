import "./App.css";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ViewSection from "./components/ViewSection";
import { useState } from "react";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "John Doe",
    address: "123 Some Road, Sometown, Countyshire, AP11 4CE",
    email: "johndoe@email.com",
    phone: "01234 567890",
  });
  const [education, setEducation] = useState([
    {
      study: "Bachelors Degree in Mathematics",
      school: "King's College, London",
      startDate: "2005-09-23",
      endDate: "2009-07-25",
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

  const generalInfoFuncs = {
    name: (e) => updateName(e),
    address: (e) => updateAddress(e),
    email: (e) => updateEmail(e),
    phone: (e) => updatePhone(e),
  };

  return (
    <>
      <Header />
      <FormSection
        generalInfo={generalInfo}
        education={education}
        onChange={generalInfoFuncs}
      />
      <ViewSection generalInfo={generalInfo} />
    </>
  );
}

export default App;
