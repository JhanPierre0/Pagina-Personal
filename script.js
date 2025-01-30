$(document).ready(function() {
    // Smooth scrolling for navigation links
    $('nav a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    // Hover effect for hobby cards
    $('.hobby-card').hover(
        function() {
            $(this).css('transform', 'scale(1.05)');
        },
        function() {
            $(this).css('transform', 'scale(1)');
        }
    );

    // Click event for product images
    $('.product-images img').on('click', function() {
        const altText = $(this).attr('alt');
        alert('You clicked on ' + altText);
    });



    // Add a "Read More" button to hobby cards
    $('.hobby-card').append('<button class="read-more">Leer mas</button>');

    // Toggle additional content for hobby cards
    $('.read-more').on('click', function() {
        const $hobbyCard = $(this).closest('.hobby-card');
        const $hiddenContent = $hobbyCard.find('.hidden-content');
        
        if ($hiddenContent.length === 0) {
            const newContent = "El fútbol es más que un deporte; es una forma de conectar con otros, liberar energía y disfrutar del trabajo en equipo. Desde un amistoso en el barrio hasta los partidos más competitivos, esta pasión combina estrategia, habilidad y espíritu deportivo, convirtiéndose en una parte esencial de su tiempo libre.";
            $hobbyCard.append('<p class="hidden-content">' + newContent + '</p>');
            $(this).text('Leer menos');
        } else {
            $hiddenContent.toggle();
            $(this).text($hiddenContent.is(':visible') ? 'Leer menos' : 'Leer mas');
        }
    });
});

