<<<<<<< HEAD
window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 15);
});

function loading(){ 
    document.getElementsByClassName('box-loading')[0].style.display = 'none';
=======
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 15);
});

function loading() {
  document.getElementsByClassName("box-loading")[0].style.display = "none";
>>>>>>> b70aabc163db74fa5031d4c57eb245a5aab82f1a
}
