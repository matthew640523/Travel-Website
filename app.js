gsap.from('.Page1Title', {duration: 1.5, y: '20vh', opacity: '0', ease: 'power3' })
gsap.from('.Page1Btn', {duration: 2.5, y: '20vh', opacity: '0', ease: 'power3' })


let ham = document.querySelector('.ham')
let navbar = document.querySelector('.Rightside')
ham.addEventListener('click', function(){
  navbar.classList.toggle('navactive')
  ham.classList.toggle('toggle')
})


const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
    easing: 'easeinquad'
  });