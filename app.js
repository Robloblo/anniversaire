let body = document.querySelector("body");
let i = 0;
i++;    

body.addEventListener('click', function(event){
    var newDiv = document.createElement("div");
    newDiv.classList.add("div"+String(i));
    //newDiv.innerHTML = event.clientX +" " +event.clientY;


    newDiv.style.height = "3em";
    newDiv.style.width = "3em";
    newDiv.style.borderRadius = "100%";
    newDiv.style.position = "absolute"
    newDiv.style.top =  (event.clientY ).toString()+"px"
    newDiv.style.left =  (event.clientX ).toString()+"px"
    newDiv.style.zIndex = "-2"
    newDiv.style.backgroundColor = "rgb("+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+")";
    newDiv.style.transform = "translate(-50%,-50%)";
    body.appendChild(newDiv);
    i++;

    if(i>=20) {
        premiere_div = document.querySelector(".div"+String(i-19))
        body.removeChild(premiere_div)

    }
   
}, false)



