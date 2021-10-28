// criar topicos com dinâmicas -v1.0.0.
// → 1° Fase:
$('.leitor > h1').each(function () {
    $(this).addClass('xn1')
})
$('.leitor > h2').each(function () {
    $(this).addClass('xn2')
})
$('.leitor > h3').each(function () {
    $(this).addClass('xn3')
})
$('.leitor > h4').each(function () {
    $(this).addClass('xn4')
})
$('.leitor > h5').each(function () {
    $(this).addClass('xn5')
})
$('.leitor > h6').each(function () {
    $(this).addClass('xn6')
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
        topicosDyn.timignClick(
            $('.leitor > h3'),
            'touchstart',
            'touchend'
        )
        topicosDyn.timignClick(
            $('.leitor > h4'),
            'touchstart',
            'touchend'
        )
        topicosDyn.timignClick(
            $('.leitor > h5'),
            'touchstart',
            'touchend'
        )
        topicosDyn.timignClick(
            $('.leitor > h6'),
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
                        topicosDyn.tratarH1($this, '.xn1', '.xn2', '.xn3', '.xn4', '.xn5', '.xn6')
                        break;
                    case 'H2':
                        topicosDyn.tratarH2($this, '.xn2', '.xn1', '.xn2', '.xn3', '.xn4', '.xn5', '.xn6')
                        break;
                    case 'H3':
                        topicosDyn.tratarH3($this, '.xn3', '.xn1', '.xn2','.xn3', '.xn4', '.xn5', '.xn6')
                        break;
                    case 'H4':
                        topicosDyn.tratarH4($this, '.xn4', '.xn1', '.xn2','.xn3', '.xn4', '.xn5', '.xn6')
                        break;
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
    tratarH1: function xn1(
        _el, // * el clicado
        _xn1, // * tag principal a tratada
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5,
        _filtrarH6
    ) {
        //* 1° Passo: verificar se o el clicado tem a classe 'n1-recolhido'
        let recolhido = _el.hasClass('n1-recolhido')


        if (!recolhido) { // * #RECOLHER-H1 se não tiver a class 'n1-recolhido' então...

            // console.log('False: ' + recolhido)
            _el.addClass('n1-recolhido') //* então => adicinar 'n1-recolhido'
            let todosElsEntre = _el.nextUntil(_xn1) // * nexUntil => selecionar todos os els  entre 'xTH1' clicado e o próximo 'xTH1'
            ocultarTodos = todosElsEntre.addClass('ocultar') // * addClass => adicina a class ocultar a todos os els entre 'xTH1' e o próximo 'xTH1'
            checkH2 = todosElsEntre.filter(_filtrarH2) // * filtrar  => todos os _filtrarH2
            checkH3 = todosElsEntre.filter(_filtrarH3) // * filtrar  => todos os _filtrarH3
            checkH4 = todosElsEntre.filter(_filtrarH4) // * filtrar  => todos os _filtrarH4
            checkH5 = todosElsEntre.filter(_filtrarH5) // * filtrar  => todos os _filtrarH4
            checkH6 = todosElsEntre.filter(_filtrarH6) // * filtrar  => todos os 'h6'

            if (checkH2.is(_filtrarH2)) { // * checar => se tem tag(s) h2, se tiver então...
                checkH2.removeClass('ocultar')
                checkH2.addClass('n2-recolhido')
            }
            else
            if (!checkH2.is(_filtrarH2) && checkH3.is(_filtrarH3)) { // * checar => se não tem a tag(s) h2 e se tem a tag(s) h3, então
                checkH3.removeClass('ocultar')
                checkH3.addClass('n3-recolhido')
            }
            else
            if (!checkH2.is(_filtrarH2) && !checkH3.is(_filtrarH3) && checkH4.is(_filtrarH4)) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h4
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            }
            else
            if (!checkH2.is(_filtrarH2) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && checkH5.is(_filtrarH5)) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h5
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            }
            else
            if (!checkH2.is(_filtrarH2) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH4) && checkH6.is(_filtrarH6)) { // * checar => mesma lógica do if anteriores, porém, para checar a tag h6
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }
        } else { // * #EXPANDIR-H1
            _el.removeClass('n1-recolhido')
            let todosElsEntre = _el.nextUntil(_xn1)
            checkH2 = todosElsEntre.filter(_filtrarH2)

            // if (!checkH2.is(_filtrarH2)) {
            //     mostrarTodos = todosElsEntre.removeClass('ocultar')
            //     checkH2.removeClass('ocultar')
            // } else
            if(checkH2.is(_filtrarH2)){
                console.log('check is h2: '+checkH2.is(_filtrarH2))
                _el.nextUntil(_filtrarH2).removeClass('ocultar')
                console.log(_el.nextUntil(_filtrarH2))
            } else
            if(checkH3.is(_filtrarH3)){
                console.log('check is h3: '+checkH3.is(_filtrarH3))
                _el.nextUntil(_filtrarH3).removeClass('ocultar')
                console.log(_el.nextUntil(_filtrarH3))
            }
        }
    },
    tratarH2: function xn2(
        _el, // * el clicado
        _xn2, // * tag principal a tratada
        _filtrarH1,
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5,
        _filtrarH6
    ) {
        let recolhido = _el.hasClass('n2-recolhido')

        if (!recolhido) {
            _el.addClass('n2-recolhido')
            let todosElsEntre = _el.nextUntil(_xn2)
            checkH1 = todosElsEntre.filter(_filtrarH1)
            checkH2 = todosElsEntre.filter(_filtrarH2)
            checkH3 = todosElsEntre.filter(_filtrarH3)
            checkH4 = todosElsEntre.filter(_filtrarH4)
            checkH5 = todosElsEntre.filter(_filtrarH5)
            checkH6 = todosElsEntre.filter(_filtrarH6)


            if (!checkH1.is(_filtrarH1) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){
                _el.nextUntil(_xn2).addClass('ocultar')
            } else
            if (checkH1.is(_filtrarH1) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){ // * todas negativas para um nivél abaixo
                _el.nextUntil(_filtrarH1).addClass('ocultar')
            } else // → TRATAR todos els entre _el e a próxima xn2
            if (!checkH1.is(_filtrarH1) && checkH3.is(_filtrarH3)){
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                checkH3.removeClass('ocultar')
                checkH3.addClass('n3-recolhido')
            } else
            if (!checkH1.is(_filtrarH1) && checkH4.is(_filtrarH4)){
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            } else
            if (!checkH1.is(_filtrarH1) && checkH5.is(_filtrarH5)){
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            } else
            if (!checkH1.is(_filtrarH1) && checkH6.is(_filtrarH6)){
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }
            // → TRATAR todos els entre _el e a próxima xn1
            if (checkH1.is(_filtrarH1) && checkH3.is(_filtrarH3)){
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                checkH3.removeClass('ocultar')
                checkH3.addClass('n3-recolhido')
            }
            if (checkH1.is(_filtrarH1) && checkH4.is(_filtrarH4)){
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            }
            if (checkH1.is(_filtrarH1) && checkH5.is(_filtrarH5)){
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            }
            if (checkH1.is(_filtrarH1) && checkH6.is(_filtrarH6)){
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }
        } else
        if(recolhido){// * #EXPANDIR-H2
            _el.removeClass('n2-recolhido')
            let todosElsEntre = _el.nextUntil(_xn2)
                checkH1 = todosElsEntre.filter(_filtrarH1),
                checkH2 = todosElsEntre.filter(_filtrarH2),
                checkH3 = todosElsEntre.filter(_filtrarH3),
                checkH4 = todosElsEntre.filter(_filtrarH4),
                checkH5 = todosElsEntre.filter(_filtrarH5),
                checkH6 = todosElsEntre.filter(_filtrarH6)

            if (!checkH1.is(_filtrarH1) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){ // * todas negativas para um nivél abaixo
                _el.nextUntil(_xn2).removeClass('ocultar')
            }
            if (checkH1.is(_filtrarH1) && !checkH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){ // * todas negativas para um nivél abaixo
                _el.nextUntil(_filtrarH1).removeClass('ocultar')
            }
            if (checkH3.is(_filtrarH3)){
                _el.nextUntil(_filtrarH3).removeClass('ocultar')
                checkH3.removeClass('ocultar')
                checkH3.addClass('n3-recolhido')
            }
            else
            if (checkH4.is(_filtrarH4)){
                _el.nextUntil(_filtrarH4).removeClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            }
            else
            if (checkH5.is(_filtrarH5)){
                _el.nextUntil(_filtrarH5).removeClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            }
            else
            if (checkH6.is(_filtrarH6)){
                _el.nextUntil(_filtrarH6).removeClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }
        }
    },
    tratarH3: function xn3(
        _el, // * el clicado
        _xn3, // * tag principal a tratada
        _filtrarH1,
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5,
        _filtrarH6
    ) {
        let recolhido = _el.hasClass('n3-recolhido')

        if (!recolhido) { // * #RECOLHER-H3
            _el.addClass('n3-recolhido')
            // ! variáveis tratar classes de niveis superiores
            let nlsTodosElsEntre = _el.nextUntil(_filtrarH1),
            nlsCheckH2 = nlsTodosElsEntre.filter(_filtrarH2),
            nlsCheckH3 = nlsTodosElsEntre.filter(_filtrarH3)

            // ! variáveis tratar classes de niveis inferiores
            let todosElsEntre = _el.nextUntil(_xn3),
            checkH1 = todosElsEntre.filter(_filtrarH1),
            // checkH2 = todosElsEntre.filter(_filtrarH3),
            // checkH3 = todosElsEntre.filter(_filtrarH3),
            checkH4 = todosElsEntre.filter(_filtrarH4),
            checkH5 = todosElsEntre.filter(_filtrarH5),
            checkH6 = todosElsEntre.filter(_filtrarH6)


            // ! tratar classes de niveis superiores
            if (nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) ){
                // console.log('tratando caso A');
                _el.nextUntil(_xn3).addClass('ocultar')
                // console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                // console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            } else
            if (!nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) ){
                // console.log('tratando aqui A1');
                _el.nextUntil(_xn3).addClass('ocultar')
                // console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                // console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }
            if (!nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) ){
                // console.log('tratando aqui B');
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                // console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                // console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }
            else
            if (nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) ){
                // console.log('tratando aqui B1');
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                // console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                // console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }
            // ! tratar classes de niveis inferiores
            if (!checkH1.is(_filtrarH1) && checkH4.is(_filtrarH4)){
                _el.nextUntil(_filtrarH3).addClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            }
            else
            if (!checkH1.is(_filtrarH1) && checkH5.is(_filtrarH5)){
                _el.nextUntil(_filtrarH5).addClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            }
            else
            if (!checkH1.is(_filtrarH1) && checkH6.is(_filtrarH6)){
                _el.nextUntil(_filtrarH6).addClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }

        }
        else
        if(recolhido){// * #EXPANDIR-H3
            _el.removeClass('n3-recolhido')


            // ! variáveis tratar classes de niveis superiores
            let nlsTodosElsEntre = _el.nextUntil(_filtrarH1),
            nlsCheckH2 = nlsTodosElsEntre.filter(_filtrarH2),
            nlsCheckH3 = nlsTodosElsEntre.filter(_filtrarH3)

            // ! variáveis tratar classes de niveis inferiores
            let todosElsEntre = _el.nextUntil(_xn3),
            checkH1 = todosElsEntre.filter(_filtrarH1),
            checkH2 = todosElsEntre.filter(_filtrarH3),
            checkH3 = todosElsEntre.filter(_filtrarH3),
            checkH4 = todosElsEntre.filter(_filtrarH4),
            checkH5 = todosElsEntre.filter(_filtrarH5),
            checkH6 = todosElsEntre.filter(_filtrarH6)

            // ! tratar classes de niveis superiores
            if (nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){
                // console.log('tratando caso A');
                _el.nextUntil(_xn3).removeClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            } else
            if (!nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){
                // console.log('tratando aqui A1');
                _el.nextUntil(_xn3).removeClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }
            if (!nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){
                // console.log('tratando aqui B');
                _el.nextUntil(_filtrarH1).removeClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }
            else
            if (nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && !checkH4.is(_filtrarH4) && !checkH5.is(_filtrarH5) && !checkH6.is(_filtrarH6)){
                // console.log('tratando aqui B1');
                _el.nextUntil(_filtrarH2).removeClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
            }


            // ! tratar classes de niveis inferiores
            if (checkH4.is(_filtrarH4)){
                _el.nextUntil(_filtrarH4).removeClass('ocultar')
                checkH4.removeClass('ocultar')
                checkH4.addClass('n4-recolhido')
            }
            else
            if (checkH5.is(_filtrarH5)){
                _el.nextUntil(_filtrarH5).removeClass('ocultar')
                checkH5.removeClass('ocultar')
                checkH5.addClass('n5-recolhido')
            }
            if (checkH6.is(_filtrarH6)){
                _el.nextUntil(_filtrarH6).removeClass('ocultar')
                checkH6.removeClass('ocultar')
                checkH6.addClass('n6-recolhido')
            }

        }
    },
    tratarH4: function xn4(
        _el, // * el clicado
        _xn4, // * tag principal a tratada
        _filtrarH1,
        _filtrarH2,
        _filtrarH3,
        _filtrarH4,
        _filtrarH5,
        _filtrarH6
    ) {
        let recolhido = _el.hasClass('n4-recolhido')

        if (!recolhido) { // * #RECOLHER-H4
            _el.addClass('n4-recolhido')
            // ! variáveis tratar classes de niveis superiores
            let nlsTodosElsEntre = _el.nextUntil(_filtrarH1),
            nlsCheckH2 = nlsTodosElsEntre.filter(_filtrarH2),
            nlsCheckH3 = nlsTodosElsEntre.filter(_filtrarH3)
            nlsCheckH4 = nlsTodosElsEntre.filter(_filtrarH4)

            console.log('nlsCheckH2 estado?: '+ nlsCheckH2.is(_filtrarH2))
            console.log('nlsCheckH3 estado?: '+ nlsCheckH3.is(_filtrarH3))
            console.log('nlsCheckH4 estado?: '+ nlsCheckH4.is(_filtrarH4))

            // ! variáveis tratar classes de niveis inferiores
            let todosElsEntre = _el.nextUntil(_xn4),
            checkH1 = todosElsEntre.filter(_filtrarH1),
            checkH4 = todosElsEntre.filter(_filtrarH4),
            checkH5 = todosElsEntre.filter(_filtrarH5),
            checkH6 = todosElsEntre.filter(_filtrarH6)


            // ! tratar classes de niveis superiores
            if (nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && nlsCheckH4.is(_filtrarH4)){
                console.log('tratando caso A');
                _el.nextUntil(_xn4).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
            else
            if (nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && nlsCheckH4.is(_filtrarH4)){
                console.log('tratando caso AX1');
                _el.nextUntil(_xn4).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
             else
            if (!nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && nlsCheckH4.is(_filtrarH4)){
                console.log('tratando caso AX2');
                _el.nextUntil(_xn4).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
             else
            if (!nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && nlsCheckH4.is(_filtrarH4)){
                console.log('tratando aqui A1');
                _el.nextUntil(_xn4).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))

            }
            if (!nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && !nlsCheckH4.is(_filtrarH4)){
                console.log('tratando aqui B');
                _el.nextUntil(_filtrarH1).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
            else
            if (nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && !nlsCheckH4.is(_filtrarH4)){
                console.log('tratando aqui B1');
                _el.nextUntil(_filtrarH3).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
            else
            if (nlsCheckH2.is(_filtrarH2) && !nlsCheckH3.is(_filtrarH3) && !nlsCheckH4.is(_filtrarH4)){
                console.log('tratando aqui B2');
                _el.nextUntil(_filtrarH2).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }
            if (!nlsCheckH2.is(_filtrarH2) && nlsCheckH3.is(_filtrarH3) && !nlsCheckH4.is(_filtrarH4)){
                console.log('tratando aqui B2');
                _el.nextUntil(_filtrarH3).addClass('ocultar')
                console.log('nlsCheckH2 estado: '+ nlsCheckH2.is(_filtrarH2))
                console.log('nlsCheckH3 estado: '+ nlsCheckH3.is(_filtrarH3))
                console.log('nlsCheckH4 estado: '+ nlsCheckH4.is(_filtrarH4))
            }


            // ! tratar classes de niveis inferiores
            // if (!checkH1.is(_filtrarH1) && checkH4.is(_filtrarH4)){
            //     _el.nextUntil(_filtrarH3).addClass('ocultar')
            //     checkH4.removeClass('ocultar')
            //     checkH4.addClass('n4-recolhido')
            // }
            // else
            // if (!checkH1.is(_filtrarH1) && checkH5.is(_filtrarH5)){
            //     _el.nextUntil(_filtrarH5).addClass('ocultar')
            //     checkH5.removeClass('ocultar')
            //     checkH5.addClass('n5-recolhido')
            // }
            // else
            // if (!checkH1.is(_filtrarH1) && checkH6.is(_filtrarH6)){
            //     _el.nextUntil(_filtrarH6).addClass('ocultar')
            //     checkH6.removeClass('ocultar')
            //     checkH6.addClass('n6-recolhido')
            // }

        }
        else
        if(recolhido){// * #EXPANDIR-H4
            _el.removeClass('n4-recolhido')




        }
    }
}
topicosDyn.init()
