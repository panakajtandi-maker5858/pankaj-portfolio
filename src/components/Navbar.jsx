import { useState , useEffect , useCallback } from "react";
import "../styles/navbar.css"


// THEME CHANGE ICON :-
const ThemeIcon = ({ theme }) => (
   
     <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    {theme === "dark" ? (
      // SUN ICONE - DARK THEME 
      <>
        <circle cx="12" cy="12" r="5"
          stroke="white" strokeWidth="1.8" fill="none" />
        <line x1="12" y1="2" x2="12" y2="4"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="22"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="2" y1="12" x2="4" y2="12"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="20" y1="12" x2="22" y2="12"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"
          stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ) : (
      // MOON ICON - LIGHT THEME 
      <path
        d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
        stroke="black" strokeWidth="1.8" fill="none"
        strokeLinecap="round" strokeLinejoin="round"
      />
    )}
  </svg>

) ;


function Navbar({ theme , toggleTheme , activeSection }) {

// FOR SCROLL -> BLUR EFFECT 
const [scrolled , setScrolled] = useState(false)

// Mobile menu open/close
const [ menuOpen ,setMenuOpen] = useState(false)

// Nav Links List 
const links = ["Home" , "About" , "Skills" , "Projects" , "Blog" , "Contact"]

// Scroll detect karna 
useEffect(()=>{
    const handler = ()=> setScrolled(window.scrollY > 30 )
    window.addEventListener("scroll" , handler)
    return ()=> window.removeEventListener("scroll" ,  handler)
},[])


// smooth scroll function 
const scrollTo =(id)=>{
    setMenuOpen(false)
    if(id === "Home"){
        window.scrollTo({ top: 0 , behavior : "smooth"})
    } else {
        document 
        .getElementById(id.toLowerCase())
        ?.scrollIntoView({ behavior : "smooth"})
}

} ; 


return (
    <>
    
    <nav className={scrolled ? "scrolled" : ""}>

        {/* Left -Logo */}

        <a href="#"
        className="nav-logo"
        onClick={(e)=> { e.preventDefault(); scrollTo("Home")}}>
        Pankaj <span>Portfolio</span>
        </a>

         {/* Center Links */}
         <ul className="nav-links">
            {links.map((link)=>(
                <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                className={activeSection === link.toLowerCase() ? "active" : ""}
                onClick={(e) => { e.preventDefault(); scrollTo(link); }}>
                        {link}
                    </a>
                </li>
            ))}

         </ul>
      

 {/* Right — Theme toggle + Hamburger */}
        <div className="nav-right">
          <button
            className="theme-btn"
            onClick={toggleTheme}
            title="Toggle theme"
          >
            <ThemeIcon theme={theme} />
          </button>

          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>


    </nav>

 {/* Mobile fullscreen overlay */}
      <div className={`mobile-overlay ${menuOpen ? "open" : ""}`}>
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={(e) => { e.preventDefault(); scrollTo(link); }}
          >
            {link}
          </a>
        ))}
      </div>

    </>
)


}
       


export default Navbar 