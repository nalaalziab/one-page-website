# one-page-website
<!DOCTYPE html>
<html>
<head>
  <title>My One-Page Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My Gallery</h1>
  <div class="gallery">
    <img src="image1.jpg" onclick="openModal(this)">
    <img src="image2.jpg" onclick="openModal(this)">
    <!-- Add more images -->
  </div>

  <!-- Lightbox Modal -->
  <div id="lightbox-modal" class="modal">
    <span class="close" onclick="closeModal()">&times;</span>
    <img class="modal-content" id="modal-image">
  </div>

  <script src="script.js"></script>
</body>
</html>
/* Lightbox Modal Styling */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: white;
  font-size: 40px;
  cursor: pointer;
}function openModal(img) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("modal-image");
  modal.style.display = "block";
  modalImg.src = img.src;
}

function closeModal() {
  document.getElementById("lightbox-modal").style.display = "none";
}
