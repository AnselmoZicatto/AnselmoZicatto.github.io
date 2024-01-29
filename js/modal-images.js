function openModal(imageSrc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-content").src = imageSrc;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
