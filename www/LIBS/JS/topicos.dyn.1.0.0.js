// criar topicos com dinâmicas -v1.0.0.
// → 1° Fase:
$('.leitor > h1').each(function () {
    $(this).addClass('xT1')
})
$('.leitor > h2').each(function () {
    $(this).addClass('xT2')
})
$('.leitor > h3').each(function () {
    $(this).addClass('xT3')
})

// → 2° Fase:
const topicosDyn = { // *
    init: () => {
        topicosDyn.timignClick(
            $('.leitor > h1'),
            'touchstart',
            'touchend'
        )
        topicosDyn.timignClick(
            $('.leitor > h2'),
            'touchstart',
            'touchend'
        )
    },
    timignClick: function setTimeClick(
        _el,
        _eventIn,
        _eventOut
    ) {
        var timer;
        _el.on(_eventIn, $(this), function (e) {
            let $this = $(this)
            console.log($this)
            console.log($this.prop('tagName'))

            timer = setTimeout(function () {
                switch ($this.prop('tagName')) {
                    case 'H1':
                        topicosDyn.tratarH1($this, '.xT1', '.xT2')
                        $this.toggleClass('dest_xTH1')
                        break;
                    case 'H2':
                        topicosDyn.tratarH2($this, '.xT2')
                        $this.toggleClass('dest_xTH2')
                    default:
                        break;
                }
            }, 1100)
            return false;
        }).on(_eventOut, $(this), function () {
            clearTimeout(timer)
            return false
        })
    },
    tratarH1: function xT1(
        _el, // * el clicado
        _xT1, // * tag principal a tratada
        _filtrarH2
    ) {
        //* 1° Passo: verificar se o el clicado tem a classe 'H1-recolhido'
        let recolhido = _el.hasClass('H1-recolhido')

        if (!recolhido) {                           // *  se não tiver a class ''H1-recolhido' então...
            // console.log('False: ' + recolhido)
            _el.addClass('H1-recolhido')                            //* então => adicinar
            let todosElsEntre = _el.nextUntil(_xT1)                 // * nexUntil => selecionar todos os els  entre 'xTH1' clicado e o próximo 'xTH1'
                ocultarTodos = todosElsEntre.addClass('ocultar')    // * addClass => adicina a class ocultar a todos os els entre 'xTH1' e o próximo 'xTH1'
                getH2 = todosElsEntre.filter(_filtrarH2)        // * filtrar  => todos os 'h2'

                console.log(getH2)
                getH2.is()
                console.log(getH2.is('H2'))

                if (getH2.is('H2')) {
                    console.log('TEM H2')
                    _el.nextUntil('.xT1').filter('.xT2').removeClass('ocultar')
                } else if(!getH2.is('H2')) {
                    console.log('NÃO TEM H2')
                    _el.nextUntil('.xT1').filter('.xT3').removeClass('ocultar')
                }

                // console.log(getFilter.is('H2'))
                // console.log(getFilter.is(getFilter))
            // switch (todosElsEntre.prop('tagName')) {
            //     case 'H2':
            //            console.log("entre os els xTH1 | TEM SIM | h2")
            //             // _el.nextUntil('.xT1').filter('.xT2').removeClass('ocultar')
            //         break;
            //     case 'H3':
            //         console.log("entre os els xTH1 | NÃO TEM SIM | h3")
            //         console.log("Depois do último elemento do $(this) Não é um h2")
            //         //    $(this).nextUntil('h1').addClass('ocultar')
            //         //    $(this).addClass('topicoRecolhido')
            //         break;
            //     default:
            //         break;
            // }
        } else {

            // console.log(proximoAte)
            // console.log(getFilter)
            // console.log(getFilter.is())
            // console.log(getFilter.is(getFilter))


            // console.log('True: ' + recolhido)
            // _el.removeClass('H1-recolhido')         // * 5° passo: remover a class 'H1-recolhido porque agora não está mais recolhido'

            // let a = _el.nextUntil(_filtrarH2)      // * 6° passo: filtrar => obter todos os els desde o xTH1 clicado até o próximo xTH2 na árvore Dom
                // b = a.removeClass('ocultar')       // * 7° passp: remove a class 'ocultar de todos os els entre xTH1 até o próximo xTH2

            // _el.nextUntil(_xT1).filter('h2').removeClass('ocultar').addClass('H2-recolhido')
        }
    },
    tratarH2: function xT2(
        _el, // * el clicado
        _xT2 // * tag principal a tratada
    ) {
        let recolhido = _el.hasClass('H2-recolhido') // * verificar se tem a class 'H2-recolhido

        if (!recolhido) { // * se não tiver a class ''H2-recolhido' então...
            // let retunarElEntre = _el.nextUntil('h2')
            // let getFilter = retunarElEntre.filter('h1')

            // console.log('False: ' + recolhido)
            // console.log(getFilter.is())

            // switch (getFilter.is()) {
            //     case getFilter.is(getFilter):
            //         // console.log("Depois do último elemento do _el É um h2")
            //         _el.nextUntil('h2').addClass('ocultar')
            //         _el.addClass('H2-recolhido')
            //         break;
            //     case !getFilter.is(getFilter):
            //         // console.log("Depois do último elemento do _el Não é um h2")
            //         _el.nextUntil('h1').addClass('ocultar')
            //         _el.addClass('H2-recolhido')
            //         break;
            //     default:
            //         break;
            // }
        } else {
            // console.log('True: ' + recolhido)
            // _el.removeClass('H2-recolhido') // * remover a class 'H2-recolhido porque agora não está mais recolhido'
            // _el.nextUntil('h2').removeClass('ocultar') // *
            // _el.nextUntil(_xT2).filter('h2').removeClass('ocultar').addClass('H2-recolhido')

        }
    }
}
topicosDyn.init()