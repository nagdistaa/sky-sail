let body = document.querySelector("body"); 

body.addEventListener("mousemove", (e)=>{
    let sail = document.createElement("div"); 
    sail.classList.add("sail");

    // Get Client 
    let verMove = e.clientY;
    let horMove = e.clientX;
    let sailSize = (Math.random() *6 + 2) +"px"  ; 
    

    // Get animation Duration 
    let animationDuration =(Math.random()*3 +1) +"s"
    // Css Styles
    sail.style.width = sailSize ; 
    sail.style.height = sailSize ;    
    sail.style.left=horMove +"px";
    sail.style.top=verMove +"px";
    sail.style.animationDuration = animationDuration


    // Grok

    let moveX = (Math.random() - 0.5) * 400;
    let moveY = (Math.random() - 0.5) * 400;
    let randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    sail.style.background= randomColor ;

    sail.style.setProperty("--move-x" , moveX +"px");
    sail.style.setProperty("--move-y" , moveY +"px");

    setTimeout(() => {
        sail.remove();
    }, parseFloat(animationDuration) * 1000);

    // Append to Body

    body.appendChild(sail); 

})


