var text = document.getElementById("p_#ofdays");

let date1 = new Date("07/15/2023");
let date2 = new Date();

let Difference_In_Time = date2.getTime() - date1.getTime();

let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

text.textContent = Difference_In_Days + " days";