window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 15);
});

function loading(){ 
    document.getElementsByClassName('box-loading')[0].style.display = 'none';
}
