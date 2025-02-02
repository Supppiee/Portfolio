import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import petpal from "../assets/projects/petpal.jpg";

export const HERO_CONTENT = `I am a passionate software engineer with a strong foundation in building dynamic and scalable web applications. As a fresher with a BE in Computer Science & Engineering, I have honed my skills in Core Java, React.js, Web Technologies, MySQL, and Data Structures through academic projects and personal learning. My goal is to continuously learn new technologies and improve my technical skills, contributing to innovative solutions that solve real-world problems and deliver impactful user experiences.`;

export const ABOUT_TEXT = `I am a motivated and adaptable Computer Science Engineer with a strong foundation in software development. I completed my education with 68% in 10th from Bapuji CBSE school, 74% in pre-university, and an 8.1 CGPA in BE from GM Institute of Technology. My technical skills span across Core Java, MySQL, OracleDB, HTML, CSS, JavaScript, and React JS. As a fresher, I am eager to apply my knowledge and continue learning in real-world environments, particularly in software development and web technologies. I am enthusiastic about problem-solving and thrive in dynamic, collaborative settings.`;

export const EDUCATION = [
  {
    year: "2018",
    degree: "School",
    school: "Bapuji [CBSE] School",
    score: "69%",
    location: "Davangere, Karnataka",
  },
  {
    year: "2020",
    degree: "Pre-University",
    school: "Vyshanavi Chetena PU college",
    score: "74%",
    location: "Davangere, Karnataka",
  },
  {
    year: "2024",
    degree: "Engineering (BE)",
    school : "GM Institute of Technology",
    score: "8.1 CGPA",
    location: "Davangere, Karnataka",
  },
];

export const PROJECTS = [
  {
    title: "PetPal",
    image: petpal,
    description:
      "Ever heard a social media platform for pets? PetPal is a social media platform for pets where users can create profiles for their pets, share posts, and connect with other pet owners.",
    technologies: ["Java","Springboot", "MySQL", "JavaScript", "HTML", "CSS"],
    link : "https://github.com/Supppiee/Petpal.git",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    link : "https://github.com/Supppiee/Portfolio.git",
  },
  {
    title: "Employee Management System",
    image: project1,
    description:
      "Employee Management System is a web application that helps companies manage employee information.",
    technologies: ["HTML", "CSS", "JavaScript", "SpringMVC", "MySQL"],
    link : "",
  },
];

export const CONTACT = {
  
  phoneNo: "+91 8618971692",
  email: "suprithhb54@gmail.com",
};
