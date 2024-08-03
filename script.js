
let burger=document.querySelector(`.header_burger`);
let xmark=document.querySelector(`.xmark`);
let header_nav=document.querySelector(`.header_nav`);


burger.addEventListener(`click`, ()=>{
    header_nav.classList.add(`show`);
    burger.style.display=`none`;
    xmark.style.display=`block`;
})

xmark.addEventListener(`click`, ()=>{
    header_nav.classList.remove(`show`);
    xmark.style.display=`none`
    burger.style.display=`block`;
})