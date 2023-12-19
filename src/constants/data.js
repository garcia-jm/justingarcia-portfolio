import images from "./images";

const projects = [
  {
    title: "Travel Experts Administration App",
    skills: [
      "Java",
      "JavaFX",
      "Object-Oriented Programming Paradigm",
      "MariaDB",
      "Scene Builder",
    ],
    description:
      "A Java Application that follows an Object-Oriented Programming Paradigm that uses MariaDB to store and organize user's data. The Application allows its users to add, update, retrieve, and delete an account or information of customers, agents, and/or packages.",
    imgUrl: [
      images.w6_frontPage,
      images.w6_customerPage,
      images.w6_agentsPage,
      images.w6_packagesPage,
    ],
  },
  {
    title: "Agent Management Application",
    skills: [
      "HTML",
      "CSS3",
      "JavaScript",
      "JSP",
      "Jakarta EE",
      "Java",
      "jQuery",
      "Ajax",
      "MariaDB",
    ],
    description:
      "An Asynchronous Web Application that uses Ajax to make requests to the server that has access to the database. The Agent Management Application lets its users manage the agent table by adding, retrieving, updating, and deleting an agent account or information.",
    imgUrl: [images.w7_frontPage],
  },
  {
    title: "Travel Experts Android App",
    skills: [
      "Java",
      "Object-Oriented Programming Paradigm",
      "Android Mobile Application",
      "RESTful Api",
      "JSON",
      "XML",
      "MariaDB",
    ],
    description:
      "An Android Application that uses RESTful Api to communicate to the server and requests data from the server that have access to the database. The Travel Experts Android App allows its users to register an account, log in, edit their information, view their booking history active/inactive, and see the available booking packages.",
    imgUrl: [
      images.w8_frontPage,
      images.w8_welcomePage,
      images.w8_profilePage,
      images.w8_bookingPage,
      images.w8_registerPage,
    ],
  },
];

const myProject = [
  {
    title: "Recipe Radar",
    skills: [
      "React",
      "Styled-Components",
      "Redux",
      "Third Party API",
      "vitejs",
    ],
    description:
      "A React Web Application that uses third-party API to gather and provide data or information to the users. Radar Recipe serves as a tool for people who are looking for food that they want to cook by providing the image of the food, ingredients, and steps on how to prepare and cook the food.",
    imgUrl: [images.comingsoon],
  },
];

export default { projects, myProject };
