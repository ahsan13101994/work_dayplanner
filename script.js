// Current Time //
let currentday = document.getElementById('currentDay')
    console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    currentday.innerText = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// Local Storage //

$(document).ready(function() {
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  $("#9am .description").val(localStorage.getItem("9am"));
  $("#10am .description").val(localStorage.getItem("10am"));
  $("#11am .description").val(localStorage.getItem("11am"));
  $("#12pm .description").val(localStorage.getItem("12pm"));
  $("#1pm .description").val(localStorage.getItem("1pm"));
  $("#2pm .description").val(localStorage.getItem("2pm"));
  $("#3pm .description").val(localStorage.getItem("3pm"));
  $("#4pm .description").val(localStorage.getItem("4pm"));
  $("#5pm .description").val(localStorage.getItem("5pm"));

  });

  // Color Change depending on time // - dont know how to make it red once the field is filled

    function timeSlotColor() {
      const hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
      let currentHr = parseInt(moment().hour());
      let ele = document.getElementsByClassName('description');
      hours.map((hour, i) => {
        let atts = ele[i].getAttribute('class')
        ele[i].setAttribute('class', `${atts} future`);
        ele[i].setAttribute('data-event', `eventNum${i}`);

        if ((currentHr >= 0 && currentHr < 5) || currentHr >= 18) {
          ele[i].setAttribute('class', `${atts} past`);
        } else if (currentHr >= 7 && currentHr < 9) {
          ele[i].setAttribute('class', `${atts} future`);
        } else if ((currentHr > 12) & (currentHr <= 17)) {
          // FOR PM

        if (hour <= 5) {
            hour += 12;
          }
        if (hour == currentHr) {
            console.log('present time');
            ele[i].setAttribute('class', `${atts} present`);
        } else if (hour < currentHr) {
            ele[i].setAttribute('class', `${atts} past`);
        } else if (hour > currentHr) {
            ele[i].setAttribute('class', `${atts} future`);
        }
        } else if ((currentHr <= 12) & (currentHr >= 9)) {
         
        
        if (hour <= 5) {
            hour += 12;
          }
        if (hour == currentHr) {
            ele[i].setAttribute('class', `${atts} present`);
        } else if (hour > currentHr) {
            ele[i].setAttribute('class', `${atts} future`);
          } else if (hour < currentHr) {
            ele[i].setAttribute('class', `${atts} past`);
          }
        } else if ((currentHr >= 0) & (currentHr < 6)) {
          }
      })
    }
    timeSlotColor();
