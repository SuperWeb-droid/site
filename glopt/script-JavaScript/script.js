let previus = document.querySelector('.btn_previus');
let next = document.querySelector('.btn_next');
let carusel_item_wrapper = document.querySelector('.carusel_item_wrapper');
let offset = 0;
next.addEventListener('click', ()=>{
  offset += 500;
  if(offset > 2500){
    offset = 0;
  };
  carusel_item_wrapper.style.marginLeft = -offset + 'px';
});

previus.addEventListener('click', ()=>{
  offset -= 500;
  if(offset < 0){
    offset = 2500;
  };
  carusel_item_wrapper.style.marginLeft = -offset + 'px';
});

const about_phone = document.querySelectorAll('.phone_btn');
const modalWindow = document.querySelector('.modal_phone');
const btn_close = document.querySelector('.x');
const tel_btn = document.querySelector('.tel_btn_modal');
const tel = document.querySelector('.tel_modal');
const form = document.querySelector('.form_tel_modal');
const formArr = [modalWindow,btn_close,tel_btn,tel,form];
const body = document.body;

about_phone.forEach(function(item){
  item.addEventListener('click', showModalPhone);
});
function showModalPhone(){
  modalWindow.style.display = 'flex';
  body.style.overflow = 'hidden';

tel_btn.addEventListener('click',()=>{
    if(tel.value.length > 11){
        modalWindow.style.display = 'none';
        alert('Скоро мы вам перезвоним !!!');
        body.style.overflow = 'scroll';
    };
    tel.value = '';
});

btn_close.addEventListener('click',()=>{
  modalWindow.style.display = 'none';
  body.style.overflow = 'scroll';
});

modalWindow.addEventListener('click',()=>{
    modalWindow.style.display = 'none';
    body.style.overflow = 'scroll';
});

formArr.forEach(function(element){
    element.addEventListener('click',(e)=>{
        e.stopPropagation();
    });
});
};


const naw = document.querySelector('.nav');
const menu_btn = document.querySelector('.wrapper_menu_btn');

menu_btn.addEventListener('click', ()=>{
  naw.classList.toggle('active');
  body.classList.toggle('active');
});

naw.addEventListener('click',()=>{
  body.classList.toggle('active');
  naw.classList.toggle('active');
});