$("h1").css("color","red") ; 

$("h1").addClass("big-title") ; 

// USING JS 

// for(var i=0 ; i<5 ; i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple" ;
//     })
// }

// USING JQUERY

$("button").click(function(){
    $("h1").css("color","purple") ; 
});

// WHATEVER WE HAVE PRESSED IN THE KEYBOARD THE H1 TAG REPLACES WITH THE LETTER WE PRESSED IN THE KEYBOARD 
$(document).keypress(function(event){
    $("h1").text(event.key) ; 
});

// ON TAKES 2 ARGUMENTS ---> EVENT LISTENER,FUNCTION 
$("h1").on("mouseover",function(){
    $("h1").css("color","purple") ;
});