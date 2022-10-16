const showBtn = document.getElementById("show-btn");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

const addHiddin =() =>{
    modal.classList.add("hiddin")
    overlay.classList.add("hiddin")
}
showBtn.addEventListener('click', () =>{
    modal.classList.remove("hiddin")
    overlay.classList.remove("hiddin")
})
closeBtn.addEventListener('click', addHiddin )
overlay.addEventListener('click', addHiddin )
document.addEventListener("keydown", (e) =>{
    if(e.key == "Escape"){
        addHiddin ()
    }
})