window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 15);
});

function loading(){ 
    document.getElementsByClassName('box-loading')[0].style.display = 'none';
}


$(document).ready(function(){
    $(".experience-company div.company-box:nth-child(1)").show();

    /* Adding the class "selected" to the first button in the list. */
    $(".experience-menu li:first button").addClass("selected");

   /* A jQuery function that is executed when the user clicks on a button. */
    $(".menu-single .button-show").click(function(){
        $(".button-show").removeClass("selected");
        $(this).addClass("selected");
        var indice = $(this).parent().index();
        indice++;
        $(".experience-company div.company-box").hide();
        $(".experience-company .company-box:nth-child("+indice+")").show();
        console.log(indice);
    });
});


$(document).ready(function() {
    
    /* ao clina no primeiro botão - a div aparece remove classe e o botão mais tbm some*/
    $(".buttom-red-More button#btn-mais").click(function() {
        $(".buttom-red-More button#btn-mais").addClass("button-hiden");
        $(".journey-educaction div.education-box-single:nth-child(4)").removeClass("education-box-hidden");
        $(".journey-educaction div.education-box-single:nth-child(5)").removeClass("education-box-hidden");
        $(".journey-educaction div.education-box-single:nth-child(6)").removeClass("education-box-hidden");
        $(".buttom-red-More button#btn-menos").removeClass("button-hiden");
    });

    /* ao clina no primeiro botão - a div aparece remove classe e o botão mais tbm some*/
    $(".buttom-red-More button#btn-menos").click(function() {
        $(".buttom-red-More button#btn-menos").addClass("button-hiden");
        $(".journey-educaction div.education-box-single:nth-child(4)").addClass("education-box-hidden");
        $(".journey-educaction div.education-box-single:nth-child(5)").addClass("education-box-hidden");
        $(".journey-educaction div.education-box-single:nth-child(6)").addClass("education-box-hidden");
        $(".buttom-red-More button#btn-mais").removeClass("button-hiden");
    });
});


//opções do menu mobile, 
$(document).ready(function() {
    $(".navbar-mobile svg.icon").click(function() {
        $(".navbar-mobile div.navbar").removeClass("obj-hiden");
        $("#nav-menu svg.icon").addClass("obj-hiden");
    });

    $(".navbar span svg.icon").click(function() {
        $(".navbar-mobile div.navbar").addClass("obj-hiden");
        $("#nav-menu svg.icon").removeClass("obj-hiden");
    });

    $(".navbar a").click(function() {
        $(".navbar-mobile div.navbar").addClass("obj-hiden");
        $("#nav-menu svg.icon").removeClass("obj-hiden");
    });
});

//altenar entre lightMode e darkMode

$(document).ready(function() {
    $('.theme__toggle').change(function(){
        if($(this).prop('checked')) {
            $(".App").addClass("app-dark"); 
            $("header").addClass("header-dark");
            $("section.banner").addClass("banner-dark");  
            $("section.about-section").addClass("about-dark"); 
            $("section.journey-section").addClass("journey-dark"); 
            $("section.portfolio").addClass("portfolio-dark"); 
            $("section.contato").addClass("contato-dark");  
            $("footer").addClass("footer-dark"); 
            
        
            $("img#figma").addClass("obj-hiden"); 
            $("svg#figma").removeClass("obj-hiden");  

        }else{
            $(".App").removeClass("app-dark");  
            $("header").removeClass("header-dark");
            $("section.banner").removeClass("banner-dark");
            $("section.about-section").removeClass("about-dark"); 
            $("section.journey-section").removeClass("journey-dark");  
            $("section.portfolio").removeClass("portfolio-dark"); 
            $("section.contato").removeClass("contato-dark"); 
            $("footer").removeClass("footer-dark"); 
            

            $("img#figma").removeClass("obj-hiden"); 
            $("svg#figma").addClass("obj-hiden");
            
        }
    }).change();
});


