
const modal = document.querySelector(".modal");


const closeBtn = document.querySelector(".modal-btn-icon");


function closeModal() {
  modal.style.display = "none"; 
}


closeBtn.addEventListener("click", closeModal);


window.addEventListener("click", function(event) {
  if (event.target == modal) {
    closeModal();
  }
});
