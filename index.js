

let dueDate = moment("08272021","MMDDYYYY").endOf('day');
let currentDate = moment();
let daysLeft = dueDate.diff(moment(),'days');

let daysLeftText = document.querySelector("#days-due");
daysLeftText.innerText  = daysLeft;


