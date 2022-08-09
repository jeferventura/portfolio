window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 15);
});

$(document).ready(function(){
    $(".experience-company div.company-box:nth-child(1)").show();

    /* Adding the class "selected" to the first button in the list. */
    $(".experience-menu li:first button").addClass("selected");

   /* A jQuery function that is executed when the user clicks on a button. */
    $(".button-show").click(function(){
        $(".button-show").removeClass("selected");
        $(this).addClass("selected");
        var indice = $(this).parent().index();
        indice++;
        $(".experience-company div.company-box").hide();
        $(".experience-company .company-box:nth-child("+indice+")").show();
        console.log(indice);
    });
});