/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatever").css("background-color", "whitesmoke");

    $("p").css("background-color", "skyblue");
    
    
    $("h1").css("background-color", "violet");
    
    
    
    $('h1').bind('mouseover' , mouseOverMe).bind('mouseout', mouseOutMe);
    
    $('p').bind('click', mouseClick);

});

function mouseOverMe () {
    $("h1").html("Ravens!!!!");
}

function mouseOutMe () {
    $('h1').html ("Life is a beach");
}

function mouseClick () {
    $('p').html ('clicked!!!!');
}

