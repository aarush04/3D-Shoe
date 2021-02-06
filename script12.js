const container = document.querySelector(".container")
const card = document.querySelector(".card")
const sneaker = document.querySelector(".sneaker img")
const title = document.querySelector(".title")
const sizes = document.querySelector(".sizes button")
const sizes40 = document.querySelector(".sizes40")
const button3 = document.querySelector(".button3")
const sizes42 = document.querySelector(".sizes42")
const purchase = document.querySelector(".purchase button")

container.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX)/25
    let yAxis = (window.innerWidth/2 - e.pageY)/25
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
})

container.addEventListener("mouseenter", (e)=>{
    card.style.transition = `none`
    sneaker.style.transform = `rotateZ(-45deg) translateZ(150px)`
    title.style.transform = `translateZ(50px)`
    sizes.style.transform = `translateZ(50px)`
    sizes40.style.transform = `translateZ(50px)`
    button3.style.transform = `translateZ(50px)`
    sizes42.style.transform = `translateZ(50px)`
    purchase.style.transform = `translateZ(50px)`
})

container.addEventListener("mouseleave", (e)=>{
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
    sneaker.style.transform = `rotateZ(0deg) translateZ(0px)`
    title.style.transform = `translateZ(0px)`
    sizes.style.transform = `translateZ(0px)`
    sizes40.style.transform = `translateZ(0px)`
    sizes42.style.transform = `translateZ(0px)`
    button3.style.transform = `translateZ(0px)`
    purchase.style.transform = `translateZ(0px)`
    card.style.transition = `all 0.5s ease`
})

