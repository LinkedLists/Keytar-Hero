export const modalHandler = () => {
  const openBtn = document.getElementById("open-modal");
  const modalScreen = document.getElementsByClassName("modal-screen")[0];
  const modal = document.getElementsByClassName("modal")[0];
  const closeBtn = document.getElementById("modal-close-btn");

  modalScreen.onclick = e => {
    if (e.target === modalScreen) {
      modal.classList.remove("open")
    }
  }
  
  openBtn.onclick = e => {
      modal.classList.add('open')
  }

  closeBtn.onclick = e => {
    modal.classList.remove('open')
}
}