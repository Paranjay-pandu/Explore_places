const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const cursor = document.querySelector("#cursor")
document.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x - 5,
        y: dets.y - 5,
        ease: "power4.out",
    })
})
const buttons = document.querySelectorAll(".btn")
buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        cursor.innerHTML = `see<br> more`
        gsap.to("#cursor", {
            scale: 4,
            opacity: 0.7,
        })
    })
    button.addEventListener("mouseleave", () => {
        cursor.innerHTML = ``
        gsap.to("#cursor", {
            scale: 1,
            opacity: 1,
        })
    })
})

let loading = document.querySelector("#loading")

document.addEventListener("DOMContentLoaded", () => {
    const tl = gsap.timeline()
    const elem = document.createElement("h1")
    elem.style.cssText = `
        z-index: 10;
    `
    elem.innerHTML = `Wanna explore Places??`
    let letters = elem.innerHTML.split("")
    elem.innerHTML = ""
    letters.map((letter) => {
        let s = document.createElement("span")
        s.innerHTML = `${letter}`
        elem.appendChild(s)
    })
    loading.appendChild(elem)
    console.log(loading)
    tl.to("#loading h1 span", {
        color: "white",
        y: 10,  
        delay: 0.5,
        stagger: 0.03,
        opacity: 0.8,
        yoyo: true,
    })
    tl.to("#loading h1 span", {
        stagger: 0.03,
        opacity: 0,
        yoyo: true,
    })
    tl.to(loading, {
        delay: 0.5,
        opacity: 0, 
        duration: 2,
    }, "anim")
    tl.to(loading, {
       display: "none"
    })
    tl.from("#main *", {
        y:"10%",
        duration: 1.5,
    }, "anim")
})

(()=>{

})()