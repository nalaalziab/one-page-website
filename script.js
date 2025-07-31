function openModal(img) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("lightbox-modal").style.display = "none";
}
