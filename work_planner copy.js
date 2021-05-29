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

  var m = moment();
  $.each($(".time-block"), function (index, value) {
      let dateHour = $(value).attr("data-time");
      if (Number(dateHour) === m.hour()) {
          $(this).find("textarea").addClass('present');
      } else if (Number(dateHour) < m.hour()) {
          $(this).find("textarea").addClass('past');
      } else {
          $(this).find("textarea").addClass('future');
      }
  });