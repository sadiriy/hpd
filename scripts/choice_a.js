document.getElementById("result").innerHTML = "Your choice: " + sessionStorage.getItem('choice');
document.getElementById('pizzaSize').addEventListener('change', setSize);
document.getElementById('drinks').addEventListener('change', setDrink);
document.getElementById('number').addEventListener('change', setNumber);

var pizza = document.getElementById('pizzaSize');
var drink = document.getElementById('drinks');
var number = document.getElementById('number');

function setSize() {

  document.getElementById("drinks").style.display = "block";

  var choice = pizza.value;

  if (choice === 'small') 
  {
  	sessionStorage.setItem("pizza", "small");
    console.log("small");
  }
    if (choice === 'medium') 
  {		
  	sessionStorage.setItem("pizza", "medium");
    console.log("medium");
  } 
    if (choice === 'big')
  { 
  	sessionStorage.setItem("pizza", "big");
  	console.log("big");
  }
    if (choice === 'huge') 
  {
  	sessionStorage.setItem("pizza", "huge");
    console.log("huge");
  } 
}

function setDrink(){

  document.getElementById("number").style.display = "block";

  var choice = drink.value;

  if (choice === 'coke') 
  {
  	sessionStorage.setItem("drink", "Coca Cola");
    console.log("coke");
  }
    if (choice === 'fanta') 
  {		
  	sessionStorage.setItem("drink", "Fanta");
    console.log("fanta");
  } 
    if (choice === 'pepsi')
  { 
  	sessionStorage.setItem("drink", "Pepsi");
  	console.log("pepsi");
  }
    if (choice === 'sprite') 
  {
  	sessionStorage.setItem("drink", "Sprite");
    console.log("sprite");
}
}

function setNumber(){

  document.getElementById('button').style.display = "block";

  var choice = number.value;

  if (choice === 'half') 
  {
  	sessionStorage.setItem("number", "0.5L");
    console.log("0.5L");
  }
    if (choice === 'one') 
  {		
  	sessionStorage.setItem("number", "1L");
    console.log("1L");
  } 
    if (choice === 'onehalf')
  { 
  	sessionStorage.setItem("number", "1.5L");
  	console.log("1.5L");
  }
}



