function init() {
  // read local storage and assign to time slots
  addTimeToHeader();

  addColorToTimeSlot();

  // add event listener to save buttons
}

function addTimeToHeader() {
  // set time in header
  var timeEl = document.getElementById("currentDay");
  timeEl.textContent = moment();
}

// add class to hour elements (past, present, future)
function addColorToTimeSlot() {
  // get current hour
  // loop through row
  // add class
}

function getHourOfTheDay() {
  //start
}

init();
