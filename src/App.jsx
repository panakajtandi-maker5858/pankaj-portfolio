import React, { useEffect, useState , useCallback} from 'react'
import { initCursor } from './utils/cursor'
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";


import "./styles/global.css"





// ACTIVE SECTION TRACKER HOOK 
function useActiveSection (){
  const [active , setActive] = useState("home")

  useEffect(()=>{
    const sections = ['about' , 'skills' , 'projects' , 'blog' , 'contact']

const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    })

 // ANOTHER OBSERVER FOR HERO SECTION 
 const heroObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setActive("home");
      },
      { threshold: 0.5 }
    );


    const hero = document.getElementById("hero");
    if (hero) heroObserver.observe(hero);

     return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };

  },[])
  return active ;
}






// ANIMATED CURSOR PART 
const Cursor = () => {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");

    let pos = { x: 0, y: 0 };
    let ringPos = { x: 0, y: 0 };
    let animId;

    const move = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    window.addEventListener("mousemove", move);

    const animate = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.12;
      ringPos.y += (pos.y - ringPos.y) * 0.12;

      if (dot) {
        dot.style.left = pos.x + "px";
        dot.style.top = pos.y + "px";
      }
      if (ring) {
        ring.style.left = ringPos.x + "px";
        ring.style.top = ringPos.y + "px";
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" style={{
        position: "fixed", top: 0, left: 0, zIndex: 99999,
        width: "10px", height: "10px",
        background: "var(--accent)", borderRadius: "50%",
        pointerEvents: "none", transform: "translate(-50%, -50%)",
        transition: "opacity 0.2s"
      }} />
      <div id="cursor-ring" style={{
        position: "fixed", top: 0, left: 0, zIndex: 99998,
        width: "30px", height: "30px",
        border: "1.5px solid var(--accent)", borderRadius: "50%",
        pointerEvents: "none", transform: "translate(-50%, -50%)",
        opacity: 0.6
      }} />
    </>
  );
};




// PAGE INTRO ANIMATION ON REFRESH OF WEBSITE FOR 1.4 SECOND :-
const PageIntro = ({ onDone }) =>{
  useEffect(()=>{
    const timer = setTimeout(()=>{
      const el = document.getElementById("page-intro")
      if(el) el.style.opacity = "0"
      setTimeout(onDone , 500)
    },1400)
    return ()=> clearTimeout(timer)
  }, [onDone])


  return (
    <div id='page-intro' style={{
       position: "fixed", inset: 0, zIndex: 99997,
      background: "var(--bg)",
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "opacity 0.5s ease"
    }}>

<span style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: "clamp(1.4rem, 4vw, 2.2rem)",
        color: "var(--accent)",
        letterSpacing: "0.08em",
        animation: "introPulse 1.2s ease forwards"
      }}>
        Welcome to Portfolio
      </span>

    </div>
  )

}  ;




// ACTUAL PAGE :-
function App (){

  const [ theme , setTheme] = useState(
    ()=> localStorage.getItem("pk_theme") || "dark"
  ) ;

  const [introVisible , setIntroVisible] = useState(true)
  const activeSection = useActiveSection()


  useEffect(()=>{
    document.documentElement.setAttribute("data-theme" , theme)
    localStorage.setItem("pk_theme" , theme)
  }, [theme])

  const toggleTheme = ()=>{
  setTheme((t) => (t === "dark" ? "light" : "dark"));
  }


  return (
    <>
    
    <style>{`
    @keyframes introPulse {
     0% { opacity: 0; transform: scale(0.92); }
          40% { opacity: 1; transform: scale(1); }
          80% { opacity: 1; }
          100% { opacity: 0; transform: scale(1.04); }
    }
    `}</style>


  <Cursor/>
  {introVisible && <PageIntro onDone={()=> setIntroVisible(false)}/>}

    <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        activeSection={activeSection}
      />
   

{/* FOR ALL THE SECTIONS  */}
<main style={{paddingTop : "80px"}}>
  
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Blog />
  <Contact />


</main>
<Footer />


    </>
  )






}





export default App;
