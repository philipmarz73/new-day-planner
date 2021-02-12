$(document).ready(function(){
    console.log("hello world");

// set jQuery document ready function enabling page manipulation
// checked link to HTML with console.log

// set up Moment.js to show current time and date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
});