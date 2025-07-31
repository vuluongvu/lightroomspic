// Get modal and elements
const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];

// When click on thumbnail
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Close modal
span.onclick = function() {
  modal.style.display = "none";
}
