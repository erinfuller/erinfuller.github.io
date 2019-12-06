var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;


// A key/value dictionary for texts to be displayed. The keys are paired with each image's alt attribute.

var texts = {
  "default_title" : "Horoscope for " + today,
  "default_description" : "Find your Sign to See your Horoscope for the Day | <em> PUI Fall 2019 Project - Erin Fuller <em>",
    
  "item1_title" : "Aries",
  "item1_description" : "March 21 - April 20",
    
  "item2_title" : "Taurus",
  "item2_description" : "April 21 - May 21",
    
  "item3_title" : "Gemini",
  "item3_description" : "May 22 - June 21",
    
  "item4_title" : "Cancer",
  "item4_description" : "June 22 - July 22",
    
  "item5_title" : "Leo",
  "item5_description" : "July 23 - August 21",
    
  "item6_title" : "Virgo",
  "item6_description" : "August 22 - September 23",
    
  "item7_title" : "Libra",
  "item7_description" : "September 24 - October 23",
    
  "item8_title" : "Scorpio",
  "item8_description" : "October 24 - November 22",
    
  "item9_title" : "Sagittarius",
  "item9_description" : "November 23 - December 22",
  
  "item10_title" : "Capricorn",
  "item10_description" : "December 23 - January 20", 
    
  "item11_title" : "Aquarius",
  "item11_description" : "January 21 - February 19",
    
  "item12_title" : "Pisces",
  "item12_description" : "Feburary 20 - March 20",
    
}

var sign_select; 


// Hover Over State to Show Sun Sign and Dates Information
$(document).ready(function(){
    $("#item_title").html(texts["default_title"]);
      $("#item_description").html(texts["default_description"]);
  $('body').on({ 
    mouseenter : function(event){
      var item_alt = $(event.target).attr("alt");
      $("#item_title").html(texts[item_alt+"_title"]);
      $("#item_description").html(texts[item_alt+"_description"]);
    },
      click : function(event){
          var sign = $(event.target).attr("alt");
          sign_select = texts[sign+"_title"];
      },
      mouseleave : function(event){
      $("#item_title").html(texts["default_title"]);
      $("#item_description").html(texts["default_description"]);
    }
  }, ".moon");
    
});



var aries;
var taurus;
var gemini;
var cancer;
var leo;
var virgo;
var libra;
var scorpio;
var sagittarius;
var capricorn;
var aquarius;
var pisces;


// Pulling the daily horoscope for each sign, I was hoping there was an easier way to do this with a loop or something but the 
// way the API is accessed by a URL for each sign made it difficult. I commented one ajax request and the rest are the same template

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aries&day=today', // URL with correct star sign
    success:function(data){
        aries = data.description; // update global variable
    },
    async: false, // <- this turns it into synchronous - global variables able to be updated
});


$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=taurus&day=today', 
    success:function(data){
        taurus = data.description; 
    },
    async: false,  
});


$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=gemini&day=today',
    success:function(data){
        gemini = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=cancer&day=today',
    success:function(data){
        cancer = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=leo&day=today',
    success:function(data){
        leo = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=virgo&day=today',
    success:function(data){
        virgo = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=libra&day=today',
    success:function(data){
        libra = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=scorpio&day=today',
    success:function(data){
        scorpio = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=sagittarius&day=today',
    success:function(data){
        sagittarius = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=capricorn&day=today',
    success:function(data){
        capricorn = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=aquarius&day=today',
    success:function(data){
        aquarius = data.description;
    },
    async: false,  
});

$.ajax({
    type:'POST',
    url:'https://aztro.sameerkumar.website?sign=pisces&day=today',
    success:function(data){
        pisces = data.description;
    },
    async: false,
});



// Uncomment below to verfiy in console that all horoscopes are unique

//console.log("aries =" + aries);
//console.log("taurus =" + taurus);
//console.log("gemini =" + gemini);
//console.log("cancer =" + cancer);
//console.log("leo =" + leo);
//console.log("virgo =" + virgo);
//console.log("libra =" + libra);
//console.log("scorpio =" + scorpio);
//console.log("sagittarius =" + sagittarius);
//console.log("capricorn =" + capricorn);
//console.log("aquarius =" + aquarius);
//console.log("pisces =" + pisces);


// update pop-up HTML
function updatePop(sign) {
    document.getElementById('horo').innerHTML = sign;
}




