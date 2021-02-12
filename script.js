$(document).ready(function(){
    console.log("hello world");

// set jQuery document ready function enabling page manipulation
// checked link to HTML with console.log

// set up Moment.js to show current time and date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

function setTimeBlockColor() {
    if(parseInt(hour) < 09){
       $("#nineText").addClass("future");
       $("#tenText").addClass("future");
       $("#elevenText").addClass("future");
       $("#noonText").addClass("future");
       $("#oneText").addClass("future");
       $("#twoText").addClass("future");
       $("#threeText").addClass("future");
       $("#fourText").addClass("future");
       $("#fiveText").addClass("future");
       $("#sixText").addClass("future");
    }











});