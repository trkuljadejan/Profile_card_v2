import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar src="pexels-goumbik-574071.jpg" alt="aaa" />
      <div className="data">
        <Intro
          name="Trkulja Dejan"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        reprehenderit voluptatibus expedita, odio eveniet, optio maiores ipsam
        dignissimos in mollitia nostrum sit recusandae. Repellat expedita
        eligendi, voluptate veniam minima aliquam!"
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div>
      <img className="avatar" src={props.src} alt={props.alt} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <div>{props.desc}</div>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          backgorund={skill.color}
        />
      ))}
      {/* <Skill skill="HTML" emoji="😊" backgorund="red" />
      <Skill skill="CSS" emoji="🙌" backgorund="blue" />
      <Skill skill="JS" emoji="😎" backgorund="green" />
      <Skill skill="REACT" emoji="🌹" backgorund="yellow" />
      <Skill skill="MS SQL" emoji="✨" backgorund="purple" /> */}
    </div>
  );
}

function Skill({ skill, level, backgorund }) {
  var emoji;
  if (level == "beginner") {
    emoji = "😊";
  } else if (level == "intermediate") {
    emoji = "🙌";
  } else {
    emoji = "😎";
  }
  return (
    <div className="skill" title={level} style={{ background: backgorund }}>
      <span>{skill}</span>
      <span>
        {level == "beginner" && "😊"}
        {level == "intermediate" && "🙌"}
        {level == "advanced" && "😎"}
      </span>
    </div>
  );
}
