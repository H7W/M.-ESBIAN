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
$('.leitor > h4').each(function () {
    $(this).addClass('xT4')
})
$('.leitor > h5').each(function () {
    $(this).addClass('xT5')
})
$('.leitor > h6').each(function () {
    $(this).addClass('xT6')
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
            // console.log($this)
            // console.log($this.prop('tagName'))

            timer = setTimeout(function () {
                switch ($this.prop('tagName')) {
                    case 'H1':
                        topicosDyn.tratarH1($this, '.xT1', '.xT2', '.xT3', '.xT4', '.xT5', '.xT6')
                        // $this.toggleClass('dest_xTH1')
                        break;
                    case 'H2':
                        topicosDyn.tratarH2($this, '.xT2', '.xT1', '.xT2', '.xT3', '.xT4', '.xT5', '.xT6')
                        // $this.toggleClass('dest_xTH2')
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
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5,
        _filtrarH6
    ) {
        //* 1° Passo: verificar se o el clicado tem a classe 'H1-recolhido'
        let recolhido = _el.hasClass('H1-recolhido')


        if (!recolhido) { // * #RECOLHER-H1 se não tiver a class 'H1-recolhido' então...

            // console.log('False: ' + recolhido)
            _el.addClass('H1-recolhido') //* então => adicinar 'H1-recolhido'
            let todosElsEntre = _el.nextUntil(_xT1) // * nexUntil => selecionar todos os els  entre 'xTH1' clicado e o próximo 'xTH1'
            ocultarTodos = todosElsEntre.addClass('ocultar') // * addClass => adicina a class ocultar a todos os els entre 'xTH1' e o próximo 'xTH1'
            checkH2 = todosElsEntre.filter(_filtrarH2) // * filtrar  => todos os 'h2'
            checkH3 = todosElsEntre.filter(_filtrarH3) // * filtrar  => todos os 'h3'
            checkH4 = todosElsEntre.filter(_filtrarH4) // * filtrar  => todos os 'h4'
            checkH5 = todosElsEntre.filter(_filtrarH5) // * filtrar  => todos os 'h5'
            checkH6 = todosElsEntre.filter(_filtrarH6) // * filtrar  => todos os 'h6'

            if (checkH2.is('H2')) { // * checar => se tem tag(s) h2, se tiver então...
                checkH2.removeClass('ocultar') // * remover a class 'ocultar'
                checkH2.addClass('H2-recolhido') // * [@codeCheckRevise]
            } else
            if (!checkH2.is('H2') && checkH3.is('H3')) { // * checar => se não tem a tag(s) h2 e se tem a tag(s) h3, então
                checkH3.removeClass('ocultar') // * remover a class 'ocultar'
            } else
            if (!checkH2.is('H2') && !checkH3.is('H3') && checkH4.is('H4')) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h4
                checkH4.removeClass('ocultar') // * remover a class 'ocultar'
            } else
            if (!checkH2.is('H2') && !checkH3.is('H3') && !checkH4.is('H4') && checkH5.is('H5')) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h5
                checkH5.removeClass('ocultar') // * remover a class 'ocultar'
            } else
            if (!checkH2.is('H2') && !checkH3.is('H3') && !checkH4.is('H4') && !checkH5.is('H5') && checkH6.is('H6')) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h6
                checkH6.removeClass('ocultar') // * remover a class 'ocultar'
            }
        } else { // * #EXPANDIR-H1
            _el.removeClass('H1-recolhido') //* então => adicinar 'H1-recolhido'
            let todosElsEntre = _el.nextUntil(_xT1) // * nexUntil => selecionar todos os els  entre 'xTH1' clicado e o próximo 'xTH1'
            checkH2 = todosElsEntre.filter(_filtrarH2) // * filtrar  => todos os 'h2'

            if (!checkH2.is('H2')) { // * checar => se tem tag(s) h2, se tiver então...
                mostrarTodos = todosElsEntre.removeClass('ocultar') // * removeClass => 'ocultar' e assim mostrar todos os els entre as tag h1
                checkH2.removeClass('ocultar') // * remover a class 'ocultar'
                // checkH2.addClass('H2-recolhido')
            } else
            if(checkH2.is('H2')){ // * checar => se tem tag(s) h2, caso tenha então...
                console.log('check is h2: '+checkH2.is('H2'))
                _el.nextUntil(_filtrarH2).removeClass('ocultar') // * [@codeCheckRevise] remover class ocultar entre '.xT1' clicado até o próximo 'xT2' encontrado
            }
        }
    },
    tratarH2: function xT2(
        _el, // * el clicado
        _xT2, // * tag principal a tratada
        _filtrarH1,
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5
    ) {
        let recolhido = _el.hasClass('H2-recolhido')

        if (!recolhido) {//* #RECOLHER-H2-INVERTIDO se não tiver a class ''H2-recolhido' então...
            _el.addClass('H2-recolhido')
            let todosElsEntre = _el.nextUntil(_xT2) // * obter todos os els entre as 'xT2'
            // todosElsEntre.addClass('ocultar')
            // console.log(todosElsEntre)

            checkH1 = todosElsEntre.filter(_filtrarH1)
            checkH2 = todosElsEntre.filter(_filtrarH2)
            checkH3 = todosElsEntre.filter(_filtrarH3)
            checkH4 = todosElsEntre.filter(_filtrarH4)
            checkH5 = todosElsEntre.filter(_filtrarH5)


            if (!checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5)){ // * todas negativas para um nivél abaixo
                console.log( //* se "false" então confirmou a afirmação
                    '#RECOLHER: check NÃO TEM nenhuma H3: '+checkH3.is(checkH3) + '\n'+
                    '#RECOLHER: check NÃO TEM nenhuma H4: '+checkH4.is(checkH4) + '\n'+
                    '#RECOLHER: check NÃO TEM nenhuma H5: '+checkH5.is(checkH5)
                )
                _el.nextUntil(_xT2).addClass('ocultar')
            } else
            if (checkH1.is(_filtrarH1)){
                console.log('#RECOLHER: check TEM uma ou mais H1: '+checkH1.is(checkH1)) //* se "true" então não confirmou a afirmação
                _el.nextUntil(_filtrarH1).addClass('ocultar')
            } else
            if (checkH3.is(_filtrarH3)){
                console.log('#RECOLHER: check TEM uma ou mais H3: '+checkH3.is(checkH3)) //* se "true" então não confirmou a afirmação
                _el.nextUntil(_xT2).addClass('ocultar')
                checkH3.removeClass('ocultar')
                checkH3.addClass('H3-recolhido')
            } else
            if(checkH4.is(_filtrarH4)){
                console.log('#RECOLHER: check TEM uma ou mais H4: '+checkH4.is(checkH4)) //* se "true" então não confirmou a afirmação
                _el.nextUntil(_xT2).addClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('H4-recolhido')
            } else
            if(checkH5.is(_filtrarH5)){
                console.log('#RECOLHER: check TEM uma ou mais H5: '+checkH5.is(checkH5)) //* se "true" então não confirmou a afirmação
                _el.nextUntil(_xT2).addClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('H5-recolhido')
            } else
            if(checkH6.is(_filtrarH6)){
                console.log('#RECOLHER: check TEM uma ou mais H6: '+checkH6.is(checkH6)) //* se "true" então não confirmou a afirmação
                _el.nextUntil(_xT2).addClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('H6-recolhido')
            }
        } else {// * #EXPANDIR-H2
            _el.removeClass('H2-recolhido') //* então => remover 'H2-recolhido'

            let todosElsEntre = _el.nextUntil(_xT2) //* [@codeCheckRevise]
            checkH1 = todosElsEntre.filter(_filtrarH1) //* [@codeCheckRevise]
            checkH2 = todosElsEntre.filter(_filtrarH2) //* [@codeCheckRevise]
            checkH3 = todosElsEntre.filter(_filtrarH3) //* [@codeCheckRevise]
            // console.log(checkH1)
            if (!checkH3.is('H3')){ // * todas negativas para um nivél abaixo
                console.log('#EXPANDIR: check NÃO tem um ou mais H3: '+checkH3.is(checkH3))
                _el.nextUntil(_xT2).removeClass('ocultar')
            }
            if (checkH3.is('H3')){
                console.log('#EXPANDIR: check tem um ou mais H3: '+checkH3.is(checkH3))
                _el.nextUntil('.xT3').removeClass('ocultar')
                checkH3.removeClass('ocultar')
                checkH3.addClass('H3-recolhido')
            }

            // if (!checkH1.is('H1')){ // → [@codeCheckRevise] sendo tratado o H2
            //     ocultarTodos = todosElsEntre.removeClass('ocultar') // * [@codeCheckRevise] adcionar no ultimo if
            // } else
            // if (checkH1.is('H1')) { // * [@codeCheckRevise]
            //     console.log(checkH1.is('H1')) //* [@codeCheckRevise]
            //     _el.nextUntil(_filtrarH1).removeClass('ocultar') //* [@codeCheckRevise]
            // } else
            // if(checkH2.is('H2')){ //* [@codeCheckRevise]
            //     console.log(checkH1.is('H2')) // * [@codeCheckRevise]
            //     _el.nextUntil(_filtrarH2).removeClass('ocultar') // * [@codeCheckRevise]
            // }

        }
    }
}
topicosDyn.init()