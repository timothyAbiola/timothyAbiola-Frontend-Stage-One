// Making an instant of the date method
const now = new Date();

// Get day and UTC time
let day = document.getElementById("day")
let time = document.getElementById("time")

// Passing value to day
day.textContent = now.toLocaleDateString(undefined, {weekday: "long"})


// Passing value to UTCtime
const timeUpdate = () => {
  const now = new Date();
  const utcTime = now.toISOString().substr(11, 8);
  time.textContent = utcTime ;
};

timeUpdate();

setInterval(timeUpdate, 1000);


// routing the button to a new location
const display = () => { window.location.href =
  "https://github.com/timothyAbiola/timothyAbiola-Frontend-Stage-One";}