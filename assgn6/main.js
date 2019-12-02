var selectedBun;

function changeBigImage(buttonName) {
    if (buttonName == "c-1") {
        document.getElementById('large-img').src='SVG/bun-base-01.svg';
        selectedBun = "Original";
    } else if (buttonName == "c-2") {
        document.getElementById('large-img').src='SVG/bun-base-02.svg';
        selectedBun = "Blackberry";
    } else if (buttonName == "c-3") {
        document.getElementById('large-img').src='SVG/bun-base-03.svg';
        selectedBun = "Walnut";
    } else if (buttonName == "c-4") {
        document.getElementById('large-img').src='SVG/bun-base-04.svg';
        selectedBun = "Original (Gluten-Free)";
    } else if (buttonName == "c-5") {
        document.getElementById('large-img').src='SVG/bun-base-05.svg';
        selectedBun = "Pumkin Spice";
    } else if (buttonName == "c-6") {
        document.getElementById('large-img').src='SVG/bun-base-06.svg';
        selectedBun = "Caramel Pecan";
    }
//    console.log(selectedBun);
}

var selectedGlaze;

function changeTopImage(buttonName) {
    if (buttonName == "d-1") {
        document.getElementById('large-img2').src='SVG/glaze-1.svg';
        selectedGlaze = "Sugar Milk";
    } else if (buttonName == "d-2") {
        document.getElementById('large-img2').src='SVG/glaze-2.svg';
        selectedGlaze = "Vanilla Sugar Milk";
    } else if (buttonName == "d-3") {
        document.getElementById('large-img2').src='SVG/glaze-3.svg';
        selectedGlaze = "Double Chocolate";
    } else if (buttonName == "d-4") {
        document.getElementById('large-img2').src='SVG/';
        selectedGlaze = "No Glaze";
    }
//    console.log(selectedGlaze);
}

var cartItems = 0;
var bunOrders = [];


function bunSubmission(base, glaze) {
  this.base = base;
  this.glaze = glaze;
}


function addToCart() {
    cartItems++;
    console.log(cartItems); 
        
    document.getElementById('cartTag').innerHTML = 'cart [items in cart: ' + cartItems +']';
    
    bunSubmission
    
    var newOrder = new bunSubmission(selectedBun, selectedGlaze);
    bunOrders.push(newOrder);
    
    console.log(bunOrders); //shows array of actual orders
}



//function populate() {
//    var element = document.getElementById("categories");
//    element.innerHTML = quiz.getCategory().text;
// 
//   	 // show options
//    var choices = quiz.getCategory().choices;
//    
//    for(var i = 0; i < choices.length; i++) {
//        var element = document.getElementById("choice" + i);
//        element.innerHTML = choices[i];
//        pick("btn" + i, choices[i]);
//    }   
//};