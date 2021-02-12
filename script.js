$(document).ready(function(){
    console.log("hello world");

// set jQuery document ready function enabling page manipulation
// checked link to HTML with console.log

// set up Moment.js to show current time and date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// set up time blocks for text to be color-coded
function setTimeBlockClass() {
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
    if(parseInt(hour) < 10){
        $("#nineText").addClass("present");
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
     if(parseInt(hour) < 11){
        $("#nineText").addClass("past");
        $("#tenText").addClass("present");
        $("#elevenText").addClass("future");
        $("#noonText").addClass("future");
        $("#oneText").addClass("future");
        $("#twoText").addClass("future");
        $("#threeText").addClass("future");
        $("#fourText").addClass("future");
        $("#fiveText").addClass("future");
        $("#sixText").addClass("future");
     }
     if(parseInt(hour) < 12){
         $("#nineText").addClass("past");
         $("#tenText").addClass("past");
         $("#elevenText").addClass("present");
         $("#noonText").addClass("future");
         $("#oneText").addClass("future");
         $("#twoText").addClass("future");
         $("#threeText").addClass("future");
         $("#fourText").addClass("future");
         $("#fiveText").addClass("future");
         $("#sixText").addClass("future");
      }
      if(parseInt(hour) < 13){
        $("#nineText").addClass("past");
        $("#tenText").addClass("past");
        $("#elevenText").addClass("past");
        $("#noonText").addClass("present");
        $("#oneText").addClass("future");
        $("#twoText").addClass("future");
        $("#threeText").addClass("future");
        $("#fourText").addClass("future");
        $("#fiveText").addClass("future");
        $("#sixText").addClass("future");
     }
     if(parseInt(hour) < 14){
         $("#nineText").addClass("past");
         $("#tenText").addClass("past");
         $("#elevenText").addClass("past");
         $("#noonText").addClass("past");
         $("#oneText").addClass("present");
         $("#twoText").addClass("future");
         $("#threeText").addClass("future");
         $("#fourText").addClass("future");
         $("#fiveText").addClass("future");
         $("#sixText").addClass("future");
      }
      if(parseInt(hour) < 15){
         $("#nineText").addClass("past");
         $("#tenText").addClass("past");
         $("#elevenText").addClass("past");
         $("#noonText").addClass("past");
         $("#oneText").addClass("past");
         $("#twoText").addClass("present");
         $("#threeText").addClass("future");
         $("#fourText").addClass("future");
         $("#fiveText").addClass("future");
         $("#sixText").addClass("future");
      }
      if(parseInt(hour) < 16){
          $("#nineText").addClass("past");
          $("#tenText").addClass("past");
          $("#elevenText").addClass("past");
          $("#noonText").addClass("past");
          $("#oneText").addClass("past");
          $("#twoText").addClass("past");
          $("#threeText").addClass("present");
          $("#fourText").addClass("future");
          $("#fiveText").addClass("future");
          $("#sixText").addClass("future");
       }
       if(parseInt(hour) < 17){
        $("#nineText").addClass("past");
        $("#tenText").addClass("past");
        $("#elevenText").addClass("past");
        $("#noonText").addClass("past");
        $("#oneText").addClass("past");
        $("#twoText").addClass("past");
        $("#threeText").addClass("past");
        $("#fourText").addClass("present");
        $("#fiveText").addClass("future");
        $("#sixText").addClass("future");
     }
       if(parseInt(hour) < 24){
           $("#nineText").addClass("past");
           $("#tenText").addClass("past");
           $("#elevenText").addClass("past");
           $("#noonText").addClass("past");
           $("#oneText").addClass("past");
           $("#twoText").addClass("past");
           $("#threeText").addClass("past");
           $("#fourText").addClass("past");
           $("#fiveText").addClass("past");
           $("#sixText").addClass("past");
        }
}});
