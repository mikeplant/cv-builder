import { v4 as uuidv4 } from "uuid";

const demoData = {
  generalInfo: {
    name: "John Doe",
    address: "123 Some Road, Sometown, Countyshire, AP11 4CE",
    email: "johndoe@email.com",
    phone: "01234 567890",
  },
  education: [
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
      endDate: "",
      isCurrent: true,
    },
  ],
  experience: [
    {
      id: uuidv4(),
      title: "Maths Professor",
      company: "Oxford University",
      startDate: "2014-07-25",
      endDate: "",
      isCurrent: true,
      responsibilities: "- Teach Maths",
    },
  ],
};

export default demoData;
