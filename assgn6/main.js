//var categories = [
//    new formQuestions("Pick Your Base", ["Original", "Blackberry","Walnut", "Original (Gluten Free)", "Pumpkin Spice", "Caramel Pecan"]),
//    new formQuestions("Pick Your Glaze", ["Sugar Milk", "Vanilla Sugar Milk", "Double Chocolate", "No Glaze"]),
//    new formQuestions("Quanity", ["1", "3", "6", "12"]),
//];



//var bases = ["Original", "Blackberry","Walnut", "Original (Gluten Free)", "Pumpkin Spice", "Caramel Pecan"];
//var glazes = ["Sugar Milk", "Vanilla Sugar Milk", "Double Chocolate", "No Glaze"];
//var quants = ["1", "3", "6", "12"];



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






//
//var bun = {base: '', top:'', quantity:''}



// Boilerplate code for an AJAX GET request using an XMLHttpRequest object.
// Source: Code Academy: Introduction to JavaScript > REQUESTS I > XHR GET Requests II
//
//const xhr = new XMLHttpRequest(); 
//const url = 'https://api-to-call.com/endpoint';
//
//xhr.responseType = 'json';
//xhr.onreadystatechange = () => {
//  if (xhr.readyState === XMLHttpRequest.DONE) {
//    return xhr.response;
//  }
//};
//
//xhr.open('GET', url);
//xhr.send();
//
//
//var selections
//
//



function changeBigImage(buttonName) {
    if (buttonName == "c-1") {
        document.getElementById('large-img').src='SVG/bun-base-01.svg'
    } else if (buttonName == "c-2") {
        document.getElementById('large-img').src='SVG/bun-base-02.svg'
    } else if (buttonName == "c-3") {
        document.getElementById('large-img').src='SVG/bun-base-03.svg'
    } else if (buttonName == "c-4") {
        document.getElementById('large-img').src='SVG/bun-base-04.svg'
    } else if (buttonName == "c-5") {
        document.getElementById('large-img').src='SVG/bun-base-05.svg'
    } else if (buttonName == "c-6") {
        document.getElementById('large-img').src='SVG/bun-base-06.svg'
    }
}

function changeTopImage(buttonName) {
    if (buttonName == "d-1") {
        document.getElementById('large-img2').src='SVG/glaze-1.svg'
    } else if (buttonName == "d-2") {
        document.getElementById('large-img2').src='SVG/glaze-2.svg'
    } else if (buttonName == "d-3") {
        document.getElementById('large-img2').src='SVG/glaze-3.svg'
    } else if (buttonName == "d-4") {
        document.getElementById('large-img2').src='SVG/'
    }
}

var cartItems = 0;

function addToCart() {
    cartItems++;
    console.log(cartItems); //YAY SHE WORK
    
    
    
    document.getElementById('cartTag').innerHTML = 'cart [items in cart: ' + cartItems +']';
}












































//
//
//
//function changeColor() {
//    style.getElementById('#c-1').style.backgroundColor="blue";
//}
//




//
//
//
//// -------------------------------------------------------
//    
//class formQuestions {
//    constructor (text, choices){
//        this.text = text;
//        this.choices = choices;
//    }
//    
////    isCorrectAnswer(choice){
////        return this.answer === choice;
////    }
//}
//   
//var categories = [
//    new formQuestions("Pick Your Base", ["Original", "Blackberry","Walnut", "Original (Gluten Free)", "Pumpkin Spice", "Caramel Pecan"]),
//    new formQuestions("Pick Your Glaze", ["Sugar Milk", "Vanilla Sugar Milk", "Double Chocolate", "No Glaze"]),
//    new formQuestions("Quanity", ["1", "3","6", "12"]),
//];
//
//class Quiz {
//    constructor(categories) {
//        this.order = "";
//        this.categories = categories;
//        this.categoryIndex = 0;
//    }	
//
//	getCategory() {
//        return this.categories[this.categoryIndex];
//    }
//    
//    pick(answer) {
//        if(this.getCategory().isCorrectAnswer(answer)) {
//   	        this.order++;
//        }
//		this.categoryIndex++;
//    }
//
//    isEnded() {
//	   return this.categoryIndex === this.categories.length;
//    }
//
//}
//
//
//function pick(id, pick) {
//    var button = document.getElementById(id);
//    button.onclick = function() {
//        quiz.pick(pick);
//   	    populate();
//    }
//};
//
//
//
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
//
////console.log(){
////    
////}
////    HTMLButtonElement
////)
//
//
////document.getElementById('btn0').onclick = function() {
////   alert("button was clicked");
////}
//
//
//
//
