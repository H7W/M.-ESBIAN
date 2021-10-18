// criar topicos com dinâmicas -v1.0.0.

// → 1° Fase: para cada 'tag h' add class xT (xT1 => h1, xTH2 => h2 etc)
$('.leitor > h1').each(function () {
    $(this).addClass('xT1') // * para cada H1 add class xT1
})
$('.leitor > h2').each(function () {
    $(this).addClass('xT2') // * para cada H2 add class xT2
})


// → 2° Fase: timingClick  e add class para destacar o título
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
            let $this = $(this) // * set variável $this a partir do elemento selecionado
            timer = setTimeout(function () { // * setTimeout de 1s e 100ms
                switch ($this.prop('tagName')) {
                    case 'H1':
                        // console.log($this.prop('tagName')+' => H1')
                        topicosDyn.tratarH1($this, '.xT1') // * chamar a função tratarH1
                        $this.toggleClass('dest_xTH1') // * set uma class para destacar a tag H1    break;
                    case 'H2':
                        // console.log($this.prop('tagName')+' => H2')

                    default:
                        break;
                }
            }, 1100)
            return false;
        }).on(_eventOut, $(this), function () {
            clearTimeout(timer) // * para a contagem do timingClick
            return false
        })
    },
    tratarH1: function xT1(_el, // * el clicado
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
    }
}
topicosDyn.init()