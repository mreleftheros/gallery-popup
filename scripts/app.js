const gallery = document.getElementById("gallery");
const modal = document.querySelector(".modal-container");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close-modal");

// events
gallery.addEventListener("click", openImg);
closeModal.addEventListener("click", closeImg);

//function to open an image from gallery
function openImg(e) {
  if(e.target.tagName === "IMG") {
    //change src
    let src = e.target.attributes[0].nodeValue;

    //update modalImg src attribute
    modalImg.src = src;
    
    //add class open to modal
    modal.classList.add("open");
  }
}

//function to close modal
function closeImg() {
  modal.classList.remove("open");
}