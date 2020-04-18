// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function myFunction(imgs) {
  modal.style.display = "block";
  modalImg.src = imgs.src;
  captionText.innerHTML = imgs.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
} 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function menuFunction() {
  document.getElementById("myMenu").classList.toggle("show");
}







