const gallery = document.getElementById("gallery");
const modal = document.querySelector(".modal-container");
const modalImg = document.querySelector(".modal-img");
const closeModal = document.querySelector(".close-modal");

// gallery click event
gallery.addEventListener("click", openImg);

//function to open an image from gallery
function openImg(e) {
  if(e.target.tagName === "IMG") {
    let src = e.target.attributes[0].nodeValue;
    modalImg.src = src;
    
    //add class open to modal
    modal.classList.add("open");
  }
}