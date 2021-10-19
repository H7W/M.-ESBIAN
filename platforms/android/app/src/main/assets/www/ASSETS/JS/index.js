
    console.log('Dispositivo Movel | build: 0/0');
    console.log('Ramificação: | bu: 0/0');
    console.log('compilação: | '+ getDtStringLongBr((new Date()).toISOString().split('T')[0]));
    const app = {
        init: () => {
            setTimeout(function () {
                console.log('ESBIAN | App | inicializado')
                app.addListeners()
            }, 1000);
        },
        addListeners: () => {
            let $btn_entrarApp          = $('#btn_entrarApp'),
                $devlopPage             = $('#devlopPage'),
                $conectando             = $('#conectando'),
                $conectado              = $('#conectado'),
                $ripple                 = $('.ripple')
                $dtFull                 = $('.dtFull')

                $dtFull.html(getDtStringLongBr((new Date()).toISOString().split('T')[0]))

            // * $demo.on("touchstart", $demo,app.touchstart)
            $ripple.on("click", $(this),function(e){
                app.efeitoOnda(
                    e,
                    $(this)
            )})

            $btn_entrarApp.on("click", $btn_entrarApp,function(){
                app.altElEfects(
                    'fadeOutUp', //DFGSDFGDDF
                    $('.app'),
                    'fadeIn',
                    $('.homePage')
               )}) // → ocultar a el.app e mostrar el.homePage
            $devlopPage.on("click", $devlopPage,function(){app.altElEfects('fadeOutUp', $('.homePage'), 'fadeIn',$('.app'))}) // → ocultar a el.app e mostrar el.homePage

            var ocultarEls = [$conectando]
            var mostrarEls = [$btn_entrarApp, $conectado]
            app.altEl(ocultarEls, mostrarEls)

            console.log('STATUS | addListeners | Conforme')

            // console.log($('header[class="pageHome"]'))
            // $('header[class="pageHome"]').addClass('slideOutUp')

            // → Minha Blibliotecas
            $('.tab-footer').altAbasPaineis(
                'tab-footer', //
                'activeGrade',
                'paginas',
                'activeFlex'
            )
            // $('.paginas').detectScrollTop()
            // $('.paginas').scroll(function() {
            //     let a = $(this).scrollTop(),
            //         b = parseInt(a);
            //         c = 10

            //         // console.log('↓ a ↓')
            //         // console.log(a)
            //         console.log('↓ b ↓')
            //         console.log(b)


            //     if(b >= c){
            //         alert("ok aqui")
            //     }
            // })


        },
        efeitoOnda: function(e, el){
                el.each(function(index) {
                    console.log(el)
                    console.log(index + ": " + el.text())
                    let x = e.clientX - e.target.offsetLeft;
                    let y = e.clientY - e.target.offsetTop;
                    let rippleElement = `<span class="rippleElement" style="left: ${x}px; top: ${y}px;"></span>`
                    el.append(rippleElement)
                    setTimeout(function () {
                        $('.rippleElement').remove();

                    }, 500);
                })
        },
        altElEfects: function(_efeitoIn, _ocultar, _efeitoOut, _mostrar){
            setTimeout(function () {
                _ocultar.addClass(_efeitoIn)
                setTimeout(function () {
                    _ocultar.css('display', 'none')
                    _mostrar.css('display', 'grid')
                    _mostrar.addClass(_efeitoOut)
                    setTimeout(function () {
                        _ocultar.removeClass(_efeitoIn)
                        _mostrar.removeClass(_efeitoOut)
                    }, 900)
                }, 900)
            }, 800)
        },
        altEl: function(_ocultar, _mostrar){
            // ocultar
            for (i=0; i<_ocultar.length; i++) {
                // console.log(_ocultar[i])
                _ocultar[i].css('display', 'none');
            }
            // mostrar
            for (i=0; i<_mostrar.length; i++) {
                // console.log(_mostrar[i])
                _mostrar[i].css('display', 'block');
                _mostrar[i].css('visibility', 'visible');
            }
        }
    }
    const ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
    document.addEventListener(ready, app.init)
