let currentday = document.getElementById('currentDay')
    console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    currentday.innerText = moment().format("dddd, MMMM Do YYYY");