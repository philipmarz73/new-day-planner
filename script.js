$(document).ready(function(){
    console.log("hello world");

// set jQuery document ready function enabling page manipulation
// checked link to HTML with console.log

// set up Moment.js to show current time and date
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

// set up time blocks for text to be color-coded
// through classes set up in CSS and HTML for past, present and future
function setTextClass() {
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
    }
});
    // set up buttons in all fields to save input data to local storage
    function setButtons () {

        $("#nineButton").on("click",function(){   
            var nine = $.trim($("#nineText").val());          
                localStorage.setItem ('Nine', nine);               
         })
         $("#tenButton").on("click",function(){   
            var ten = $.trim($("#TenText").val());          
                localStorage.setItem ('Ten', ten);               
         })
         $("#elevenButton").on("click",function(){   
            var eleven = $.trim($("#elevenText").val());          
                localStorage.setItem ('Eleven', eleven);               
         })
         $("#noonButton").on("click",function(){   
            var noon = $.trim($("#noonText").val());          
                localStorage.setItem ('noon', noon);               
         })
         $("#oneButton").on("click",function(){   
            var one = $.trim($("#oneText").val());          
                localStorage.setItem ('one', one);               
         })
         $("#twoButton").on("click",function(){   
            var two = $.trim($("#twoText").val());          
                localStorage.setItem ('two', two);               
         })
         $("#threeButton").on("click",function(){   
            var three = $.trim($("#nineText").val());          
                localStorage.setItem ('three', three);               
         })
         $("#fourButton").on("click",function(){   
            var four = $.trim($("#nineText").val());          
                localStorage.setItem ('four', four);               
         })
         $("#fiveButton").on("click",function(){   
            var five = $.trim($("#fiveText").val());          
                localStorage.setItem ('five', five);               
         })
    }
    // pull saved field input back from local storage

    function getInput() {
        $("#nineText").val(localStorage.getItem('nine')); 
        $("#tenText").val(localStorage.getItem('ten'));
        $("#elevenText").val(localStorage.getItem('eleven'));
        $("#noonText").val(localStorage.getItem('noon'));
        $("#oneText").val(localStorage.getItem('one'));
        $("#twoText").val(localStorage.getItem('two'));
        $("#threeText").val(localStorage.getItem('three'));
        $("#fourText").val(localStorage.getItem('four'));
        $("#fiveText").val(localStorage.getItem('five'));
        $("#sixText").val(localStorage.getItem('six'));
    }
    // functions are called to run
    getInput();
    setTextClass();
    setButtons();
