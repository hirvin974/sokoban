// 37 = gauche
// 39 = droite
// 40 = bas
// 38 = haut

var pokeTest = document.querySelector('.pokeball');
var hyperTest = document.querySelector('.hyperball');
var superTest = document.querySelector('.superball');
var n = document.querySelector('.alert-success');
var levelbonus = document.querySelector('.grille4');




document.onkeydown = function (event) {
    if (event.keyCode == 37) Deplacegauche();
    if (event.keyCode == 39) Deplacedroite();
    if (event.keyCode == 38) Deplacehaut();
    if (event.keyCode == 40) Deplacebas();
    if (levelbonus.querySelector('#a8').querySelector(".ball") && document.querySelector('#a5').querySelector(".ball") && document.querySelector('#a19').querySelector(".ball")){
        n.style.display="inline";
    } 
}


function Deplacegauche() {
    var pikachu = document.querySelector('#pikachu');
    var parentHero = pikachu.parentElement.getAttribute('data');
    var x = parseInt(parentHero);
    var gauche = x - 1;
    var convertgauche = gauche.toString();
    var newHero = document.querySelector("[data='" + convertgauche + "']");
    if (!newHero.classList.contains("mur")) {


        if (newHero.querySelector('.pokeball')) {
            var parentPoke = newHero.querySelector('.pokeball').parentElement.getAttribute('data');
            var xPoke = parseInt(parentPoke);
            var gauchePoke = xPoke - 1;
            var convertgauchePoke = gauchePoke.toString();
            var newPoke = document.querySelector("[data='" + convertgauchePoke + "']");
            
            if(newPoke.querySelector('.hyperball') || newPoke.querySelector('.pokeball') || newPoke.querySelector('.superball') || newPoke.classList.contains("mur")){
                
            }else{
                newPoke.appendChild(pokeTest);
                newHero.appendChild(pikachu);
            }
        }
        else if (newHero.querySelector('.hyperball')) {      
            var parentHyper = newHero.querySelector('.hyperball').parentElement.getAttribute('data');    
            var xHyper = parseInt(parentHyper);        
            var gaucheHyper = xHyper - 1;     
            var convertgaucheHyper = gaucheHyper.toString();       
            var newHyper = document.querySelector("[data='" + convertgaucheHyper + "']");    
            if(newHyper.querySelector('.hyperball') || newHyper.querySelector('.pokeball') || newHyper.querySelector('.superball') || newHyper.classList.contains("mur")){
                
            }else{
                newHyper.appendChild(hyperTest);
                newHero.appendChild(pikachu);
            }  
            // if (!newHyper.classList.contains("mur")) {
            //     newHyper.appendChild(hyperTest);
            //     newHero.appendChild(pikachu);
            // }
        } else if (newHero.querySelector('.superball')) {
            var parentsuper = newHero.querySelector('.superball').parentElement.getAttribute('data');
            var xsuper = parseInt(parentsuper);
            var gauchesuper = xsuper - 1;    
            var convertgauchesuper = gauchesuper.toString();
            var newsuper = document.querySelector("[data='" + convertgauchesuper + "']");
            if(newsuper.querySelector('.hyperball') || newsuper.querySelector('.pokeball') || newsuper.querySelector('.superball') || newsuper.classList.contains("mur")){
                
            }else{
                newsuper.appendChild(superTest);
                newHero.appendChild(pikachu);
            }
        } else {
            newHero.appendChild(pikachu);
        }
    }
}











function Deplacedroite() {
    var pikachu = document.querySelector('#pikachu');
    var parentHero = pikachu.parentElement.getAttribute('data');
    var x = parseInt(parentHero);
    var droite = x + 1;
    var convertdroite = droite.toString();
    var newHero = document.querySelector("[data='" + convertdroite + "']");

    if (!newHero.classList.contains("mur")) {


        if (newHero.querySelector('.pokeball')) {
            var parentPoke = newHero.querySelector('.pokeball').parentElement.getAttribute('data');
            var xPoke = parseInt(parentPoke);
            var droitPoke = xPoke + 1;
            var convertdroitPoke = droitPoke.toString();
            var newPoke = document.querySelector("[data='" + convertdroitPoke + "']");

            if(newPoke.querySelector('.hyperball') || newPoke.querySelector('.pokeball') || newPoke.querySelector('.superball') || newPoke.classList.contains("mur")){
                
            }else{
                newPoke.appendChild(pokeTest);
                newHero.appendChild(pikachu);
            }
        } else if (newHero.querySelector('.hyperball')) {
            var parentHyper = newHero.querySelector('.hyperball').parentElement.getAttribute('data');
            var xHyper = parseInt(parentHyper);
            var droitHyper = xHyper + 1;
            var convertdroitHyper = droitHyper.toString();
            var newHyper = document.querySelector("[data='" + convertdroitHyper + "']");
            if(newHyper.querySelector('.hyperball') || newHyper.querySelector('.pokeball') || newHyper.querySelector('.superball') || newHyper.classList.contains("mur")){
                
            }else{
                newHyper.appendChild(hyperTest);
                newHero.appendChild(pikachu);
            }
            // if (!newHyper.classList.contains("mur")) {
            //     newHyper.appendChild(hyperTest);
            //     newHero.appendChild(pikachu);

            // }
        } else if (newHero.querySelector('.superball')) {
            var parentsuper = newHero.querySelector('.superball').parentElement.getAttribute('data');
            var xsuper = parseInt(parentsuper);
            var droitsuper = xsuper + 1;
            var convertdroitsuper = droitsuper.toString();
            var newsuper = document.querySelector("[data='" + convertdroitsuper + "']");
            if(newsuper.querySelector('.hyperball') || newsuper.querySelector('.pokeball') || newsuper.querySelector('.superball') || newsuper.classList.contains("mur")){
                
            }else{
                newsuper.appendChild(superTest);
                newHero.appendChild(pikachu);
            }
        }else {

            newHero.appendChild(pikachu);
        }

    }
}



function Deplacehaut() {
    var pikachu = document.querySelector('#pikachu');
    var parentHero = pikachu.parentElement.getAttribute('data');
    var y = parseInt(parentHero);
    var haut = y - 10;
    var converthaut = haut.toString();
    var newHero = document.querySelector("[data='" + converthaut + "']");

    if (!newHero.classList.contains("mur")) {


        if (newHero.querySelector('.pokeball')) {
            var parentPoke = newHero.querySelector('.pokeball').parentElement.getAttribute('data');
            var yPoke = parseInt(parentPoke);
            var hautPoke = yPoke - 10;
            var converthautPoke = hautPoke.toString();
            var newPoke = document.querySelector("[data='" + converthautPoke + "']");
            if(newPoke.querySelector('.hyperball') || newPoke.querySelector('.pokeball') || newPoke.querySelector('.superball') || newPoke.classList.contains("mur")){
                
            }else{
                newPoke.appendChild(pokeTest);
                newHero.appendChild(pikachu);
            }
        } else if (newHero.querySelector('.hyperball')) {
            var parentHyper = newHero.querySelector('.hyperball').parentElement.getAttribute('data');
            var yHyper = parseInt(parentHyper);
            var hautHyper = yHyper - 10
            var converthautHyper = hautHyper.toString();
            var newHyper = document.querySelector("[data='" + converthautHyper + "']");
            if(newHyper.querySelector('.hyperball') || newHyper.querySelector('.pokeball') || newHyper.querySelector('.superball') || newHyper.classList.contains("mur")){
                
            }else{
                newHyper.appendChild(hyperTest);
                newHero.appendChild(pikachu);
            }
            // if (!newHyper.classList.contains("mur")) {
            //     newHyper.appendChild(hyperTest);
            //     newHero.appendChild(pikachu);

            // }
            
        } else if (newHero.querySelector('.superball')) {
            var parentsuper = newHero.querySelector('.superball').parentElement.getAttribute('data');
            var ysuper = parseInt(parentsuper);
            var hautsuper = ysuper - 10;
            var converthautsuper = hautsuper.toString();
            var newsuper = document.querySelector("[data='" + converthautsuper + "']");
            if(newsuper.querySelector('.hyperball') || newsuper.querySelector('.pokeball') || newsuper.querySelector('.superball') || newsuper.classList.contains("mur")){
                
            }else{
                newsuper.appendChild(superTest);
                newHero.appendChild(pikachu);
            }
        } else {

            newHero.appendChild(pikachu);
        }
    }
}














function Deplacebas() {
    var pikachu = document.querySelector('#pikachu');
    var parentHero = pikachu.parentElement.getAttribute('data');
    var y = parseInt(parentHero);
    var bas = y + 10;
    var convertbas = bas.toString();
    var newHero = document.querySelector("[data='" + convertbas + "']");

    if (!newHero.classList.contains("mur")) {

       if (newHero.querySelector('.pokeball')) {
           
            var parentPoke = newHero.querySelector('.pokeball').parentElement.getAttribute('data');
            var yPoke = parseInt(parentPoke);
            var basPoke = yPoke + 10;
            var convertbasPoke = basPoke.toString();
            var newPoke = document.querySelector("[data='" + convertbasPoke + "']");
                           
            if(newPoke.querySelector('.hyperball') || newPoke.querySelector('.pokeball') || newPoke.querySelector('.superball') || newPoke.classList.contains("mur")){
                
            }else{
                newPoke.appendChild(pokeTest);
                newHero.appendChild(pikachu);
            }

        } 
        
      else if (newHero.querySelector('.hyperball')) {

            var parentHyper = newHero.querySelector('.hyperball').parentElement.getAttribute('data');
            var yHyper = parseInt(parentHyper);
            var basHyper = yHyper + 10;
            var convertbasHyper = basHyper.toString();
            var newHyper = document.querySelector("[data='" + convertbasHyper + "']");
            
            if(newHyper.querySelector('.hyperball') || newHyper.querySelector('.pokeball') || newHyper.querySelector('.superball') || newHyper.classList.contains("mur")){
                
            }else{
                newHyper.appendChild(hyperTest);
                newHero.appendChild(pikachu);
            }
        } 
        
       else if (newHero.querySelector('.superball')) {
            var parentsuper = newHero.querySelector('.superball').parentElement.getAttribute('data');
            var ysuper = parseInt(parentsuper);
            var bassuper = ysuper + 10;
            var convertbassuper = bassuper.toString();
            var newsuper = document.querySelector("[data='" + convertbassuper + "']");

            if(newsuper.querySelector('.hyperball') || newsuper.querySelector('.pokeball') || newsuper.querySelector('.superball') || newsuper.classList.contains("mur")){
                
            }else{
                newsuper.appendChild(superTest);
                newHero.appendChild(pikachu);
            }
        } 
        else {
            newHero.appendChild(pikachu);
        }

    }
}


