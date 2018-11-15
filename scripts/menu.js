var load;

function loader() {
    load = setTimeout(show, 700);
}

function show() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}
		var choice;
		function pepperoni(){
			choice = 'Pepperoni'
		sessionStorage.setItem("choice", "Pepperoni");
		}
		function combo(){
			choice = 'Combo'
		sessionStorage.setItem("choice", "Combo");
		}
		function diablo(){
			choice = 'Diablo'
		sessionStorage.setItem("choice", "Diablo");
		}
		function margo(){
			choice = 'Margherita'
		sessionStorage.setItem("choice", "Margherita");
		}
		function meat(){
			choice = 'Meat'
		sessionStorage.setItem("choice", "Meat");
		}
		function cesare(){
			choice = 'Cesare'
		sessionStorage.setItem("choice", "Cesare");
		}