var pizza = sessionStorage.getItem('choice');
var pizzaSize = sessionStorage.getItem('pizza');
var drink = sessionStorage.getItem('drink');
var drinkSize = sessionStorage.getItem('number');


document.getElementById("result").innerHTML = "Pizza: " + pizza + " " + pizzaSize + "<br> Drink: " + drink + " " + drinkSize;

if(pizza === 'Pepperoni'){
    document.getElementById("img1").src = "images/pizzas/peperoni.png";
}

if(pizza === 'Combo'){
    document.getElementById("img1").src = "images/pizzas/combo.png";
}

if(pizza === 'Diablo'){
    document.getElementById("img1").src = "images/pizzas/diablo.png";
}

if(pizza === 'Meat'){
    document.getElementById("img1").src = "images/pizzas/meat.png";
}

if(pizza === 'Margherita'){
    document.getElementById("img1").src = "images/pizzas/margo.png";
}

if(pizza === 'Cesare'){
    document.getElementById("img1").src = "images/pizzas/cesare.png";
}

if(drink === 'Coca Cola'){
    document.getElementById("img2").src = "images/drinks/coca-cola.png";
}

if(drink === 'Fanta'){
    document.getElementById("img2").src = "images/drinks/fanta.png";
}

if(drink === 'Pepsi'){
    document.getElementById("img2").src = "images/drinks/pepsi.png";
}

if(drink === 'Sprite'){
    document.getElementById("img2").src = "images/drinks/sprite.png";
}