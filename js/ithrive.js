/**
 * Created by KRM on 3/27/17.
 */

$(document).ready(function(){

    // Blog slider initiation and options
    $('#blogSlider').slick({
        dots: true,
        autoplay: false,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 580,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });



    // Limiting symbols to 200 in a game thumbnail preview description
    $("div.text_preview_holder p").text(function(index, currentText) {
        return currentText.substr(0, 200);
    });

});