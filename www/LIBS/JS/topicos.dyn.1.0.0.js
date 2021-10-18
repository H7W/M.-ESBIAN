// criar topicos com dinâmicas -v1.0.0.
// → 1° Fase:
$('.leitor > h1').each(function () {
    $(this).addClass('xT1')
})
$('.leitor > h2').each(function () {
    $(this).addClass('xT2')
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
            timer = setTimeout(function () {
                switch ($this.prop('tagName')) {
                    case 'H1':
                        topicosDyn.tratarH1($this, '.xT1')
                        $this.toggleClass('dest_xTH1')
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
        _xT1 // * tag principal a tratada
    ) {
        let recolhido = _el.hasClass('H1-recolhido') // * verificar se tem a class 'H1-recolhido

        if (!recolhido) { // * se não tiver a class ''H1-recolhido' então...
            console.log('False: ' + recolhido)
            _el.addClass('H1-recolhido') // * add class 'H1-recolhido' ao elemento clicado
            let proximoAte = _el.nextUntil(_xT1) // * obter todos os els desde o xTH1 clicado até o próximo xTH1 na árvore Dom
            proximoAte.addClass('ocultar') // * ocultar todos os els entre o xTH1 clicado  até o próximo xTH1 na árvore Dom''
        } else {
            console.log('True: ' + recolhido)
            _el.removeClass('H1-recolhido') // * remover a class 'H1-recolhido porque agora não está mais recolhido'
            _el.nextUntil('h2').removeClass('ocultar') // *
            _el.nextUntil(_xT1).filter('h2').removeClass('ocultar').addClass('H2-recolhido')

        }
    },
    tratarH2: function xT2(
        _el, // * el clicado
        _xT2 // * tag principal a tratada
    ) {
        let recolhido = _el.hasClass('H2-recolhido') // * verificar se tem a class 'H2-recolhido

        if (!recolhido) { // * se não tiver a class ''H2-recolhido' então...
            let retunarElEntre = _el.nextUntil('h2')
            let getFilter = retunarElEntre.filter('h1')

            console.log('False: ' + recolhido)
            console.log(getFilter.is())

            switch (getFilter.is()) {
                case getFilter.is(getFilter):
                    // console.log("Depois do último elemento do _el É um h2")
                    _el.nextUntil('h2').addClass('ocultar')
                    _el.addClass('H2-recolhido')
                    break;
                case !getFilter.is(getFilter):
                    // console.log("Depois do último elemento do _el Não é um h2")
                    _el.nextUntil('h1').addClass('ocultar')
                    _el.addClass('H2-recolhido')
                    break;
                default:
                    break;
            }
        } else {
            // console.log('True: ' + recolhido)
            // _el.removeClass('H2-recolhido') // * remover a class 'H2-recolhido porque agora não está mais recolhido'
            // _el.nextUntil('h2').removeClass('ocultar') // *
            // _el.nextUntil(_xT2).filter('h2').removeClass('ocultar').addClass('H2-recolhido')

        }
    }
}
topicosDyn.init()