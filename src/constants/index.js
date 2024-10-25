import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png"

export const HERO_CONTENT = `Hi, I’m a Python Data Analyst specializing in transforming raw data into actionable insights. With expertise in Pandas, NumPy, and Seaborn, I streamline data cleaning, processing, and visualization to reveal hidden trends and drive smarter decisions. I excel in automating workflows, ensuring efficient and scalable solutions. My proficiency in SQL and MySQL allows me to manage and refine databases effectively, turning complex information into clear, data-driven strategies. Let me help you uncover valuable insights and enhance your decision-making with powerful data analysis.`;

export const ABOUT_TEXT = `I am currently in my final year of pursuing a Bachelor's of Technology in Computer Science and Engineering. My expertise encompasses data analysis with Python, utilizing libraries such as NumPy, Pandas, and Matplotlib for deriving insights from complex datasets. I am also proficient in MySQL, with a strong command over SQL for efficient database operations. Java is my primary programming language, which I extensively use in competitive programming to solve intricate problems, enhancing my algorithmic skills. Additionally, I have developed skills in frontend web development, focusing on creating responsive and user-friendly interfaces. My passion for technology drives me to continually learn and adapt, ensuring I stay current in this rapidly evolving field.`;

export const EXPERIENCES = [
  {
    year: "2021 - 2025",
    cousre: "B-Tech Computer Science and Engineering",
    College: "Aurora's Technological and Research Institue Hyderabad",
    Subjects: ["Data Structures", "DBMS", "Machine Learning", "Cloud Computing"],
  },
  {
    year: "2020 - 2021",
    cousre: "Intermediate",
    College: "De Paul School",
    Subjects: ["Java", "Maths", "Physics"],
  },
  {
    year: "2018 - 2019",
    cousre: "High School",
    College: "De Paul School",
    Subjects: ["Java", "Maths", "Physics", "Biology"],
  },
 
];

export const PROJECTS = [
  {
    title: "Darast درست",
    image: project1,
    description:
      "This project leverages a suite of machine learning algorithms to detect potential threats, ensuring effective and accurate anomaly identification. Built with Python Django 2.2.7, the user-friendly web interface provides seamless interaction, while real-time prediction capabilities enable immediate analysis of incoming data. Advanced data preprocessing techniques, including cleaning and feature selection, optimize model accuracy for precise threat detection. Additionally, the system is designed to scale, handling large datasets with robust performance across diverse environments",

    technologies: ["HTML", "CSS", "Django", "MySQL", "Pandas"],
    link: "https://github.com/CodexSpy/AttackDetector",
  },
{
  title: "SpyTerminal",
  image: project4,
  description:
    "Completed this project as part of my learning in TypeScript. It's a basic command terminal-type portfolio that provides my information by entering predefined commands. The project was done with the help of a YouTube tutorial, and I made some minor changes, such as adding a new background and making other command modifications.",
  technologies: ["HTML", "CSS", "TypeScript", "Next-Js"],
  link: "https://github.com/CodexSpy/Terminal_Portfolio",
},
  {
    title: "SpyQr",
    image: project2,
    description:
      "SpyQR is a versatile tool designed for generating QR codes from links or extracting links from QR codes effortlessly. Whether you want to share a link with someone quickly or extract information from a QR code, SpyQR simplifies the process with its intuitive interface and powerful functionality. Convert any link into a QR code instantly. Simply paste the link, and SpyQR will generate the QR code for you to share or download",
    technologies: ["HTML", "CSS", "javaScript"],
    link: "https://codexspy.github.io/SpyQR",
  },
  {
    title: "SpyWeather",
    image: project3,
    description:
      "This weather application is a lightweight, user-friendly interface built using simple HTML, CSS, and JavaScript. It allows users to easily check current weather conditions for any location worldwide. The application features a clean and intuitive layout, showcasing the temperature, humidity, wind speed, and weather description for the selected city",

    technologies: ["HTML", "CSS", "javaScript"],
    link:"https://codexspy.github.io/WeatherApplication"
  },
];

export const CONTACT = {
  address: "Hyderabad, Telangana INDIA (500077) ",
  email: "kmoin9985@gmail.com",
};
