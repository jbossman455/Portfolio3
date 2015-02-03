/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$("document").ready(function() {
    $(".whatever").css("background-color", "whitesmoke");
   
   

    $('#randPara').bind('click', addAPara);
    $('#removeAPara').bind('click', removeAPara);
    $('#replaceWText').bind('click', replaceWText);

    $('show').css('visibility', 'hidden');

    $('#hide').bind('click', hideThePage);

    $('#show').bind('click', showThePage);

//    $('#superHumans').accordion({header: "h3"});
//    $('#superHumans').css('width','400px');
//    
//    $('h3').css('background','cyan');


});

function mouseOverMe() {
    $("h3").html("Ravens!!!!");
}

function mouseOutMe() {
    $('h1').html("Life is a beach");
}

function mouseClick() {
    $('p').html("Beach");
}



function removeAPara() {
    $('#randPara p:last').remove();
}

function addAPara() {
    $('#randPara').append('<p>ADDED</P>');
}

function replaceWText() {
    $('#replaceWText').text('Replaced!');
}





function hideThePage() {
    $('#show').css('visibility', 'visible');
    $('div').hide('slide', {}, 2500);
    $('#show').show('fold', {}, 2500);
}

function showThePage() {
    $('div').show('fold', {}, 2500);

}