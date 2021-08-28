

let dueDate = moment("08272021","MMDDYYYY").startOf('day');
let currentDate = moment();
let daysLeft = dueDate.diff(moment(),'days');
let daysPast = currentDate.diff(dueDate,'days') ;



// let daysLeftText = document.querySelector("#days-due");
// daysLeftText.innerText  = daysLeft;

let daysPastText = document.querySelector("#days-past");
daysPastText.innerText = daysPast;


// Get the modal
var modal = document.getElementById("myModal");



// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
var img = document.getElementsByClassName("img");

const enlargeImage = function() {
    console.log('clicked');

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
   modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

for( var i=0; i<img.length; i++){
    img[i].addEventListener('click',enlargeImage);
}


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}