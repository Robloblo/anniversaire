let body = document.querySelector("body");
let image = document.querySelector(".salut")
let barre = document.querySelector(".barre")

let i = 0;
i++;    

body.addEventListener('click', function(event){
    var newDiv = document.createElement("div");
    newDiv.classList.add("div"+String(i));
    //newDiv.innerHTML = event.clientX +" " +event.clientY;

    taille_rand = (2+Math.floor(Math.random()*3)).toString()
    newDiv.style.height = taille_rand+"em";
    newDiv.style.width = taille_rand+"em";
    newDiv.style.borderRadius = "100%";
    newDiv.style.position = "absolute"
    newDiv.style.top =  (event.clientY ).toString()+"px"
    newDiv.style.left =  (event.clientX ).toString()+"px"
    newDiv.style.zIndex = "-2"
    newDiv.style.backgroundColor = "rgb("+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+")";
    newDiv.style.transform = "translate(-50%,-50%)";
    body.appendChild(newDiv);
    i++;
    
    
    if(i>=60) {
        premiere_div = document.querySelector(".div"+String(i-59))
        body.removeChild(premiere_div)
        
    }
    if(i===5){
        
        image.setAttribute("src","images/img_enveloppe_ouverte.png")
    }
}, false)


body.addEventListener('mousemove', function(event){
    
    cooX = event.clientX;
    if(cooX>(0+barre.offsetWidth/2) && cooX<(screen.width-(barre.offsetWidth/2))){
        barre.style.left = cooX+"px";
    }
    
    else{
        console.log(screen.width)
        if(cooX>(screen.width-(barre.offsetWidth/2))){
            barre.style.left = (screen.width-barre.offsetWidth/2).toString()+"px";
        }
        else{
            barre.style.left =barre.offsetWidth/2+"px";
        }
    }

},false);
body.addEventListener('touchmove', function(event){
    
    cooX = event.clientX;
    if(cooX>(0+barre.offsetWidth/2) && cooX<(screen.width-(barre.offsetWidth/2))){
        barre.style.left = cooX+"px";
    }
    
    else{
        console.log(screen.width)
        if(cooX>(screen.width-(barre.offsetWidth/2))){
            barre.style.left = (screen.width-barre.offsetWidth/2).toString()+"px";
        }
        else{
            barre.style.left =barre.offsetWidth/2+"px";
        }
    }

},false);




