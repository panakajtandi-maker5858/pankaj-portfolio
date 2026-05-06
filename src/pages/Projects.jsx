import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/projects.css";

// Projects Data 
const projects = [
  {
    num: "PROJECT 01",
    title: "Productivity Dashboard",
    desc: "A focused React dashboard for tracking tasks, habits, and daily goals.",
    stack: ["React JS", "Redux", "CSS"],
    live: "https://productivity-dashboard-six-mu.vercel.app/",
    github: "https://github.com/panakajtandi-maker5858/Productivity_Dashboard",
    wip: false,
    featured: false,
  },
  {
    num: "PROJECT 02",
    title: "DevConnect",
    desc: "Full-stack job application platform for developers — browse listings, apply, track status.",
    stack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary", "Email Sending"],
    live: "https://devconnect-dun.vercel.app/",
    github: "https://github.com/panakajtandi-maker5858/devconnect",
    wip: false,
    featured: false,
  },
  {
    num: "PROJECT 03",
    title: "Nexus",
    desc: "A full-stack AI-powered chat application. Talk to Gemini AI, get real-time internet search results, manage multiple chat sessions — all in a ChatGPT-style interface built from scratch.",
    stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Socket.io", "LangChain", "Gemini AI", "Tailwind"],
    highlights: [
      { icon: "🤖", text: "Gemini AI via LangChain" },
      { icon: "🌐", text: "Real-time Internet Search (Tavily)" },
      { icon: "⚡", text: "Socket.io Real-time" },
      { icon: "💾", text: "Persistent Chat History" },
      { icon: "🔐", text: "JWT Auth + HTTP-only Cookies" },
    ],
    live: "https://nexus-three-red.vercel.app",
    github: "https://github.com/panakajtandi-maker5858/Nexus",
    wip: false,
    featured: true,
  },
];

// Single Card 
const ProjectCard = ({ project, delay }) => (
  <div
    className={`project-card reveal ${project.featured ? "project-card--featured" : ""}`}
    data-delay={delay}
  >
    <div className="project-card-inner">

      {/* AI Powered badge — only Nexus */}
      {project.featured && (
        <span className="ai-badge">AI Powered</span>
      )}

      {/* Number */}
      <p className="project-num">{project.num}</p>

      {/* Title */}
      <h3 className="project-title">{project.title}</h3>

      {/* Description */}
      <p className="project-desc">{project.desc}</p>

      {/* Feature Pills — only Nexus */}
      {project.highlights && (
        <div className="project-highlights">
          {project.highlights.map((h) => (
            <span className="highlight-pill" key={h.text}>
              {h.icon} {h.text}
            </span>
          ))}
        </div>
      )}

      {/* Stack tags */}
      {project.stack.length > 0 && (
        <div className="project-stack">
          {project.stack.map((s) => (
            <span className="stack-tag" key={s}>{s}</span>
          ))}
        </div>
      )}

      {/* WIP badge OR Live + GitHub links */}
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