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
      study: "Master's Degree, Mathematics",
      school: "UWE Bristol",
      startDate: "2008-09",
      endDate: "2012-07",
      isCurrent: false,
      isCollapsed: true,
    },
    {
      id: uuidv4(),
      study: "Bachelor's Degree, Mathematics",
      school: "King's College, London",
      startDate: "2005-09",
      endDate: "2008-07",
      isCurrent: false,
      isCollapsed: false,
    },
  ],
  experience: [
    {
      id: uuidv4(),
      title: "Professor of Mathematics",
      company: "Southampton University",
      startDate: "2018-03",
      endDate: "",
      isCurrent: true,
      isCollapsed: false,
      responsibilities:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\nExcepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Praesent quis nunc quis justo pulvinar feugiat. Nullam vitae lorem a ligula elementum pulvinar. Duis eget felis eu nulla porta congue a et magna. Donec sit amet massa a augue ullamcorper lobortis. In non ligula fermentum, eleifend metus at, tempor nibh.",
    },
    {
      id: uuidv4(),
      title: "Maths Tutor",
      company: "find-a-tutor.com",
      startDate: "2012-07",
      endDate: "2018-02",
      isCurrent: false,
      isCollapsed: false,
      responsibilities:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
};

export default demoData;
