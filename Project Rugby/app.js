const btns = document.querySelectorAll('.btn-mdl');
const modal = document.querySelector('.bloc-modal');
const close = document.querySelector('.close');
const index = document.querySelector('.bloc-modal img');

btns.forEach(btn =>{
    btn.addEventListener('click', (e) =>{
        index.src = 'img/eqp-1.jpg';
       
        modal.classList.add('active');
    })
})
modal.addEventListener('click', () =>{
    modal.classList.remove('active');
})

//Nav
const nav = document.querySelector('nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 30){
        nav.classList.add('nav-animate')

    } else{
        nav.classList.remove('nav-animate')
    }
})