import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/skills.css";

//   DATA OF ALL SKILLS :-
const frontend = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "JavaScript ES6+", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
];

const backend = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "JWT Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
];

const tools = [
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
  { name: "Cloudinary", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudinary/cloudinary-original.svg" },
  { name: "Cron Job", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
];

// Single Chip 
const Chip = ({ name, icon }) => (
  <span className="chip">
    <img
      src={icon}
      alt={name}
      className="chip-icon"
      onError={(e) => { e.target.style.display = "none"; }}
    />
    {name}
  </span>
);

//  Skills Component 
function Skills() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="skills" ref={ref}>

      <p className="section-label reveal">Tools of the trade</p>

      <h2 className="section-heading reveal" data-delay="80">
        <span className="section-num">02.</span>Skills
      </h2>

      <p className="section-sub reveal" data-delay="120">
        What I actually use
      </p>

      <div className="skills-grid">

        {/* Frontend Column */}
        <div className="skills-col reveal" data-delay="180">
          <h3>Frontend</h3>
          <div className="chip-group">
            {frontend.map((skill) => (
              <Chip key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Backend Column */}
        <div className="skills-col reveal" data-delay="260">
          <h3>Backend</h3>
          <div className="chip-group">
            {backend.map((skill) => (
              <Chip key={skill.name} {...skill} />
            ))}
          </div>
        </div>

        {/* Tools Column */}
        <div className="skills-col reveal" data-delay="340">
          <h3>Tools</h3>
          <div className="chip-group">
            {tools.map((skill) => (
              <Chip key={skill.name} {...skill} />
            ))}
          </div>
        </div>

      </div>

      <p className="skills-footer reveal" data-delay="420">
        Every tool on this list has survived at least one 2am debugging session.
      </p>

    </section>
  );
}

export default Skills;