import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/projects.css";

//  Projects Data 
const projects = [
  {
    num: "PROJECT 01",
    title: "Productivity Dashboard",
    desc: "A focused React dashboard for tracking tasks, habits, and daily goals.",
    stack: ["React JS", "Redux", "CSS" , "Tailwind-CSS"],
    live: "https://productivity-dashboard-six-mu.vercel.app/",
    github: "https://github.com/panakajtandi-maker5858/Productivity_Dashboard",
    wip: false,
  },
  {
    num: "PROJECT 02",
    title: "DevConnect",
    desc: "Full-stack job application platform for developers — browse listings, apply, track status.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Email Sending" ,"Authentication"],
    live: "https://devconnect-dun.vercel.app/",
    github: "https://github.com/panakajtandi-maker5858/devconnect",
    wip: false,
  },
  {
    num: "PROJECT 03",
    title: "Next Project",
    desc: "Coming Soon",
    stack: [],
    wip: true,
  },
];

// Single Card 
const ProjectCard = ({ project, delay }) => (
  <div className="project-card reveal" data-delay={delay}>
    <div className="project-card-inner">

      {/* Number */}
      <p className="project-num">{project.num}</p>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-desc">{project.desc}</p>

      {/* Stack tags — only if not wip */}
      {project.stack.length > 0 && (
        <div className="project-stack">
          {project.stack.map((s) => (
            <span className="stack-tag" key={s}>{s}</span>
          ))}
        </div>
      )}

      {/* WIP badge OR Live + GitHub link */}
      {project.wip ? (
        <span className="wip-badge">Coming Soon</span>
      ) : (
        <div className="project-links">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Live ↗
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            GitHub ↗
          </a>
        </div>
      )}

    </div>
  </div>
);

//  Projects Component
function Projects() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="projects" ref={ref}>

      <p className="section-label reveal">What I've shipped</p>

      <h2 className="section-heading reveal" data-delay="80">
        <span className="section-num">03.</span>Projects
      </h2>

      <p className="section-sub reveal" data-delay="120">
        Things I've built
      </p>

      {/* Cards Grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard
            key={project.title}
            project={project}
            delay={180 + i * 100}
          />
        ))}
      </div>

      {/* Footer link */}
      <div className="projects-footer reveal" data-delay="480">
        <a
          href="https://github.com/panakajtandi-maker5858"
          target="_blank"
          rel="noopener noreferrer"
        >
          See all on GitHub →
        </a>
      </div>

    </section>
  );
}

export default Projects;