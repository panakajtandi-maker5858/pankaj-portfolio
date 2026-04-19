import { useEffect } from "react";

function useReveal(ref , threshold = 0.15){
    useEffect(()=>{
        const el = ref.current ; 
        if(!el) return ;


    const items = el.querySelectorAll(".reveal") ;

    const obsever = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                const delay = parseInt(entry.target.dataset.delay || "0")
                setTimeout(()=>{
                    entry.target.classList.add("in-view");
                    entry.target.classList.remove("out-view")
                } , delay)
            } else {
                const rect = entry.target.getBoundingClientRect()
                entry.target.classList.remove("in-view")
                if(rect.top < 0 ) entry.target.classList.add("out-view")
            }
        })
    }, { threshold , rootMargin : "0px 0px -60px 0px"})

    items.forEach((item)=> obsever.observe(item))
    return ()=> obsever.disconnect();

    } , [ref , threshold])
}



export default useReveal ;