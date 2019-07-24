


var pizzaMenuNav = document.getElementById('menu-nav-pizza');
var pizzasHiden = false;
const pizzas = document.getElementsByClassName("pizzas");

function togglePizzas(){
  for(var i = 0; i < pizzas.length; i++){
      if (pizzas[i].style.display === "none"){
          pizzas[i].style.display = "block";
          pizzasHiden = false;
      }
      else{
          pizzas[i].style.display = "none";
          pizzasHiden = true;
      }
      
  };
};

