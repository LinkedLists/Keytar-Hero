export const modalHandler = () => {
  const openBtn = document.getElementById("open-modal");
  const modalScreen = document.getElementsByClassName("modal-screen")[0];
  const modal = document.getElementsByClassName("modal")[0];
  
  modalScreen.onclick = e => {
    if (e.target === modalScreen) {
      modal.classList.remove("open")
    }
  }
  
  openBtn.onclick = e => {
      console.log("aweta")
      modal.classList.add('open')
  }
}