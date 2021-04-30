$(document).ready(function () {
  //variable declaration
  var currentDay = $("#currentDay");
  currentDay.text(moment().format("dddd, MMM Do"));

  //dynamically style the time blocks based on curent time
  //function will be responsible for checking time and determining what class to add
  function checkTime() {
    //grab the current hour
    var currentHour = moment().hours();

    //need to grab hour of timeblock to compare
    //loop though the timeblock hours
    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  }

  checkTime();

  //event handlers
  $(".saveBtn").on("click", function () {
    //capture the information that the user inputted and we need to store that info into local storage

    // need to capture the value of that input and i also need to know what timeblock its attached to
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    //save into into local storage
    localStorage.setItem(time, value);
  });

  //display the items that are in local storage into the time blocks
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
});
