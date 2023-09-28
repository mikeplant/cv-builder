import { v4 as uuidv4 } from "uuid";

const demoData = {
  generalInfo: {
    id: uuidv4(),
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
      startDate: "2005-09",
      endDate: "2009-07",
      isCurrent: false,
      isCollapsed: true,
    },
    {
      id: uuidv4(),
      study: "Master's Degree in Mathematics",
      school: "UWE Bristol",
      startDate: "2009-09",
      endDate: "",
      isCurrent: true,
      isCollapsed: false,
    },
  ],
  experience: [
    {
      id: uuidv4(),
      title: "Maths Professor",
      company: "Oxford University",
      startDate: "2014-07",
      endDate: "",
      isCurrent: true,
      isCollapsed: false,
      responsibilities:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

export default demoData;
