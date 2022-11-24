let body = document.querySelector("body");
let image = document.querySelector(".salut");
let barre = document.querySelector(".barre");


liste_couleur = ["255,50,0","255,255,0","100,255,0","0,255,0","0,255,100","0,255,255","0,100,255","100,0,255","230,0,230","255,0,100","255,0,255","255,0,0"]

var i = 0;
var ouverte = false;
if(!ouverte){
    ouverte = true;
    image.addEventListener('click', function(){
      
        image.setAttribute("src","images/non.png");
        
    });
};


body.addEventListener('click', function(event){
    var newDiv = document.createElement("div");
    newDiv.classList.add("div"+String(i));
    //newDiv.innerHTML = event.clientX +" " +event.clientY;

    taille_rand = (3+Math.floor(Math.random()*2)).toString()
    newDiv.style.height = taille_rand+"em";
    newDiv.style.width = taille_rand+"em";
    newDiv.style.borderRadius = "100%";
    newDiv.style.position = "absolute"
    newDiv.style.top =  (event.clientY ).toString()+"px"
    newDiv.style.left =  (event.clientX ).toString()+"px"
    newDiv.style.zIndex = "-2"
    newDiv.style.backgroundColor = "rgb("+liste_couleur[Math.floor(Math.random()*12)].toString()+")";
    
    /*"rgb("+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+")";*/
    
    newDiv.style.transform = "translate(-50%,-50%)";
    body.appendChild(newDiv);
    i++;
    
    
    if(i>60) {
        premiere_div = document.querySelector(".div"+String(i-60));
        body.removeChild(premiere_div);
        
    }
}, false);


setInterval(ma_fonction,60);
function ma_fonction(){
   
    var newDiv = document.createElement("div");
    newDiv.classList.add("div"+String(i));
    //newDiv.innerHTML = event.clientX +" " +event.clientY;

    taille_rand = (4+Math.floor(Math.random()*8)).toString()
    cooX = Math.floor(Math.random()*screen.width);
    cooY = Math.floor(Math.random()*screen.height);
    console.log(cooX,cooY);
    newDiv.style.height = taille_rand+"em";
    newDiv.style.width = taille_rand+"em";
    newDiv.style.borderRadius = "100%";
    newDiv.style.position = "relative"
    newDiv.style.top =  (cooY).toString()+"px"
    newDiv.style.left =  (cooX ).toString()+"px"
    newDiv.style.zIndex = "-2"
    newDiv.style.boxShadow = "0px 0px 10px black"
    newDiv.style.backgroundColor = "rgb("+liste_couleur[Math.floor(Math.random()*12)].toString()+")";
    
    /*"rgb("+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+","+Math.floor(Math.random()*255).toString()+")";*/
    
    newDiv.style.transform = "translate(-50%,-50%)";
    body.appendChild(newDiv);
    i++;
    
    
    if(i>60) {
        premiere_div = document.querySelector(".div"+String(i-60));
        body.removeChild(premiere_div);
        
    }


}










/*body.addEventListener('mousemove', function(event){
    
    cooX = event.clientX;
    if(cooX>(0+barre.offsetWidth/2) && cooX<(screen.width-(barre.offsetWidth/2))){
        barre.style.left = cooX+"px";
    }
    
    else{
        
        if(cooX>(screen.width-(barre.offsetWidth/2))){
            barre.style.left = (screen.width-barre.offsetWidth/2).toString()+"px";
        }
        else{
            barre.style.left =barre.offsetWidth/2+"px";
        }
    }

},false);

body.addEventListener('touchmove', function(event){
    
    var touch = event.targetTouches[0].clientX;
    
   
    
    if(touch>(0+barre.offsetWidth/2) && touch<(screen.width-(barre.offsetWidth/2))){
        barre.style.left = touch.toString()+"px";
    }
    
    else{
        
        if(touch>(screen.width-(barre.offsetWidth/2))){
            barre.style.left = (screen.width-barre.offsetWidth/2).toString()+"px";
            
        }
        else{
            barre.style.left =barre.offsetWidth/2+"px";
        }
    }

},false);


*/



