let body = document.querySelector("body");
let image = document.querySelector(".salut")
let i = 0;
i++;    

body.addEventListener('click', function(event){
    var newDiv = document.createElement("div");
    newDiv.classList.add("div"+String(i));
    //newDiv.innerHTML = event.clientX +" " +event.clientY;

    taille_rand = (2+Math.floor(Math.random()*4)).toString()
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
    image.setAttribute("src","images/img_enveloppe_ouverte.png")
    if(i>=60) {
        premiere_div = document.querySelector(".div"+String(i-59))
        body.removeChild(premiere_div)

    }
   
}, false)



