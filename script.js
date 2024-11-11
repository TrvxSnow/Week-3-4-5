const openBtn=document.querySelector(".open")
const closeBtn=document.querySelector(".close")
const nav=document.querySelector(".nav")

openBtn.addEventListener("click", openNav =()=>{
    const openBtn=document.querySelector(".open")
    const closeBtn=document.querySelector(".close")
    const nav=document.querySelector(".nav")

    nav.style.display="block"
    closeBtn.style.display="block"
    openBtn.style.display="none"
})

closeBtn.addEventListener("click", closeNav =()=>{
    const openBtn=document.querySelector(".open")
    const closeBtn=document.querySelector(".close")
    const nav=document.querySelector(".nav")

    nav.style.display="none"
    openBtn.style.display="block"
    closeBtn.style.display="none"

})