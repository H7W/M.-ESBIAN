// ! futura biblioteca (alternar Abas e paineis correlatos)

jQuery(function ($) {
    $.fn.detectScrollTop = function (    ) {

        var lastScrollTop = 0,
            limiteDown    = 15,
            limiteUp      = 50

        $('.paginas > main').on('scroll', function() {
            st = $(this).scrollTop(),
            stInt = parseInt(st)
            // console.log(stInt)

            var ocultarEls = [
                $('header.pageHome > span'),
                $('header.pageHome > h1')
            ]
            var mostrarEls = [
                $('.tituloLogo')
            ]
            var addMClasses = [
                $('header.pageHome')
            ]
            var rmMClasses = [
                $('header.pageHome')
            ]


            if(stInt > lastScrollTop) {
                console.log('down: '+stInt)
                if(stInt >=  limiteDown){
                    console.log('Maior > 15: limiteDown')
                    function ocultarMuitos(_ocultar, _mostrar, _addClass, _rmMClasses){
                        // ocultar
                        for (i=0; i<_ocultar.length; i++) {
                            _ocultar[i].css('display', 'none')
                        }
                        // mostrar
                        for (i=0; i<_mostrar.length; i++) {
                            _mostrar[i].css('display', 'grid');

                        }
                        for (i=0; i<_addClass.length; i++) {
                            _addClass[i].addClass('slideOutUp');
                        }
                        // mostrar
                        for (i=0; i<_rmMClasses.length; i++) {
                            _rmMClasses[i].removeClass('overlayImg');
                        }
                    }
                    ocultarMuitos(ocultarEls, mostrarEls, addMClasses, rmMClasses)
                    $('header.pageHome > .ripple > svg').css('fill', '#2D4B73')
                }
            }
            else {
                console.log('up: '+stInt)
                if(stInt <=  limiteUp){
                    console.log('Maior <= 0: limiteDown')
                    function ocultarMuitos(_ocultar, _mostrar, _addClass, _rmMClasses){
                        // ocultar
                        for (i=0; i<_ocultar.length; i++) {
                            _ocultar[i].css('display', 'grid')
                        }
                        // mostrar
                        for (i=0; i<_mostrar.length; i++) {
                            _mostrar[i].css('display', 'none');

                        }
                        for (i=0; i<_addClass.length; i++) {
                            _addClass[i].addClass('overlayImg');
                        }
                        // mostrar
                        for (i=0; i<_rmMClasses.length; i++) {
                            _rmMClasses[i].removeClass('slideOutUp');
                        }
                    }
                    ocultarMuitos(ocultarEls, mostrarEls, addMClasses, rmMClasses)
                    $('header.pageHome > .ripple > svg').css('fill', '#fff')
                }
            }
            lastScrollTop = st;
        })
    };$.fn
});