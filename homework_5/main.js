


// -------------------------------------------------------
    
class formQuestions {
    constructor (text, choices){
        this.text = text;
        this.choices = choices;
    }
    
//    isCorrectAnswer(choice){
//        return this.answer === choice;
//    }
}
   
var categories = [
    new formQuestions("Pick Your Base", ["Original", "Blackberry","Walnut", "Original (Gluten Free)", "Pumpkin Spice", "Caramel Pecan"]),
    new formQuestions("Pick Your Glaze", ["Sugar Milk", "Vanilla Sugar Milk", "Double Chocolate", "No Glaze"]),
    new formQuestions("Quanity", ["1", "3","6", "12"]),
];

class Quiz {
    constructor(categories) {
        this.order = "";
        this.categories = categories;
        this.categoryIndex = 0;
    }	

	getCategory() {
        return this.categories[this.categoryIndex];
    }
    
    pick(answer) {
        if(this.getCategory().isCorrectAnswer(answer)) {
   	        this.order++;
        }
		this.categoryIndex++;
    }

    isEnded() {
	   return this.categoryIndex === this.categories.length;
    }

}


function pick(id, pick) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.pick(pick);
   	    populate();
    }
};



function populate() {
    var element = document.getElementById("categories");
    element.innerHTML = quiz.getCategory().text;
 
   	 // show options
    var choices = quiz.getCategory().choices;
    
    for(var i = 0; i < choices.length; i++) {
        var element = document.getElementById("choice" + i);
        element.innerHTML = choices[i];
        pick("btn" + i, choices[i]);
    }   
};

//console.log(){
//    
//}
//    HTMLButtonElement
//)


//document.getElementById('btn0').onclick = function() {
//   alert("button was clicked");
//}




