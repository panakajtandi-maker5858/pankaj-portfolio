
export function initCursor(){
    const dot = document.getElementById("cursor-dot")
    const ring = document.getElementById("cursor-ring")


    if( !dot || !ring ) return ;
    
     let pos = { x : 0 , y : 0}
     let ringPos = { x : 0 , y : 0 }
     let animId ; 

     window.addEventListener("mousemove" , (e)=>{
        pos.x = e.clientX ; 
        pos.y = e.clientY
     }) ;

     const animate = ()=>{
        ringPos.x += (pos.x - ringPos.x) * 0.12 ;
        ringPos.y += (pos.y - ringPos.y)* 0.12  ;

      
         dot.style.left = pos.x + "px" ;
         dot.style.top = pos.y + "px" ;
         ring.style.left = ringPos.x + "px" ;
         ring.style.top = ringPos.y + "px" ;

         animId = requestAnimationFrame(animate)

     } 
  






}