const openPopUp = document.querySelector("#open-pop-up")
const popUP = document.querySelector("#pop-up")
const close = document.querySelector(".close")
const section = document.querySelector(".section")
openPopUp.addEventListener("click", ()=>{
popUP.style.opacity = "100"
    popUP.style.transition = ".4s"
    openPopUp.style.display= "none"
})

close.addEventListener("click", ()=>{
    popUP.style.opacity = ""
    openPopUp.style.display = ""
    popUP.style.transition = "0.4s"
})
