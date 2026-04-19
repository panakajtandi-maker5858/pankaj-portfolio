import { useEffect , useRef , useState } from "react";
import useReveal from '../hooks/useReveal'
import "../styles/hero.css"



// TYPEWRITER HOOK 
function useTypewriter(words , speed = 80 , pause = 1800 ) {
    
const [display , setDisplay] = useState("")
const [wordIdx , setWordIdx] = useState(0)
const [charIdx , setCharIdx] = useState(0)
const [deleting , setDeleting] = useState(false)

useEffect(()=>{
    const current = words[wordIdx]
    let timeout ;

if(!deleting && charIdx < current.length ) {
     // Typing — Adding single single character
      timeout = setTimeout(() => setCharIdx((i) => i + 1), speed);
} else if (!deleting && charIdx === current.length) {
      // TYPING WORD COMPLETED - PAUSE THE TYPER 
      timeout = setTimeout(() => setDeleting(true), pause);

    } else if (deleting && charIdx > 0) {
      // Delete — DELETE SINGLE SINGLE CHARACTER
      timeout = setTimeout(() => setCharIdx((i) => i - 1), speed / 2);

    }  else if (deleting && charIdx === 0) {
      // EVERY THING IS DELETED - NEXT WORD
      setDeleting(false);
      setWordIdx((i) => (i + 1) % words.length);
    }

       setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);

}, [charIdx , deleting , wordIdx , words , speed , pause])

 return display
}




//  DO NOT GRID CANVAS 
const DotGrid = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    // Canvas size = parent size
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const spacing = 36;
      const cols = Math.ceil(canvas.width / spacing) + 1;
      const rows = Math.ceil(canvas.height / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;

          // Wave effect — Each Dot have different Opacity 
          const wave = Math.sin(t * 0.4 + c * 0.3 + r * 0.2) * 0.5 + 0.5;

          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 229, 192, ${0.12 + wave * 0.18})`;
          ctx.fill();
        }
      }

      t += 0.025;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} id="dot-canvas" />;
};




// MAIN PART : HERO SECTION 
function Hero() {
  const ref = useRef(null);
  useReveal(ref);

  const typed = useTypewriter([
    "Full Stack Developer",
    "MERN Stack Engineer",
    "React JS Specialist",
    "Problem Solver",
  ]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" ref={ref}>

      {/* Animated dot grid background */}
      <DotGrid />

      {/* Faint watermark */}
      <div className="hero-watermark">PANKAJ</div>

      {/* Main content */}
      <div className="hero-content">

        <p className="hero-intro reveal" data-delay="0">
          — Available for freelance &amp; full-time
        </p>

        <h1 className="hero-heading reveal" data-delay="80">
          Hey, I'm Pankaj.<br />
          I build things<br />
          for the web.
        </h1>

        {/* Typewriter */}
        <div className="typewriter-wrap reveal" data-delay="160">
          <span>{typed}</span>
          <span className="typewriter-cursor" />
        </div>

        <p className="hero-bio reveal" data-delay="240">
          I turn complex problems into clean, scalable code — From
          pixel-perfect UI's to scalable backends.
        </p>

        {/* CTA Buttons */}
        <div className="cta-group reveal" data-delay="320">
          <a href="#projects" className="btn-primary" onClick={scrollToProjects}>
            View My Work →
          </a>
          <a
            href="https://github.com/panakajtandi-maker5858"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;