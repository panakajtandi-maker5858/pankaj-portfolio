import { useRef } from "react";
import useReveal from "../hooks/useReveal";
import "../styles/about.css";

function About() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="about" ref={ref}>

      {/* Section label */}
      <p className="section-label reveal">Who I am</p>

      {/* Section heading */}
      <h2 className="section-heading reveal" data-delay="80">
        <span className="section-num">01.</span>About
      </h2>

      {/* Section subtitle */}
      <p className="section-sub reveal" data-delay="120">
        Two years in. Still curious.
      </p>

      {/* Two column grid */}
      <div className="about-grid">

        {/* Left — Bio */}
        <div className="about-text">
          <p className="reveal" data-delay="160">
            I've been building on the web for 2+ years — and I still get
            excited every time something <em>clicks into place</em>. I started
            with HTML and curiosity, and ended up deep in the MERN stack,
            learning how every layer talks to each other.
          </p>

          <p className="reveal" data-delay="220">
            I care about the details. The 200ms transition. The API that
            handles edge cases. The UI that just <em>feels right</em>.
          </p>

          <p className="reveal" data-delay="280">
            Right now I'm focused on writing cleaner code, shipping faster,
            and working on things that actually matter to real users.
          </p>

          {/* Stat chips */}
          <div className="stat-chips">
            {[
              "2+ Years",
              "Lots of Projects",
              "∞ Problems Solved",
            ].map((s, i) => (
              <span
                key={s}
                className="stat-chip reveal"
                data-delay={`${360 + i * 80}`}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Right — PK glowing box */}
        <div className="pk-box reveal" data-delay="200">
          <div className="pk-ring" />
          <div className="pk-box-inner">
            <span className="pk-initials">PK</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;