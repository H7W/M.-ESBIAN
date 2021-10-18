// ! futura biblioteca (alternar Abas e paineis correlatos)

jQuery(function ($) {
    $.fn.altAbasPaineis = function (
        tabClassName,   // validar a class do elemento clicado (deve ser a mesma class do seletor)
        actTab,         // class active para as tabs
        paineis,        // selecinar painel correlato, ou seja, onde data-tab seja igual o data-painel
        actPainel
    ) {
        $(this).on('click', function (e) {
            // e.stopPropagation(); // temporariamente desativado
            e.preventDefault();
            let $this = $(this),
                a = $this.attr('class'),
                b = a.split(" ")
            c = b.filter(validarTabClassName).toString()
            d = $this.data('tab')
            e = $('.' + c + '[data-tab="' + d + '"]')
            f = e.addClass(actTab)
            g = $('.' + c).not('[data-tab="' + d + '"]')
            h = g.removeClass(actTab)
            // econtrar painel correlato
            i = $('.'+paineis+'[data-painel="' + d + '"]')
            j = i.addClass(actPainel)
            k = $('.'+paineis).not('[data-painel="' + d + '"]')
            l = k.removeClass(actPainel)

            function validarTabClassName(tabClass) {
                return tabClass == tabClassName
            }
            // console.log($this)
            // console.log(a)
            // console.log(b)
            // console.log(c)
            // console.log(e)
            // console.log(d)

        })
    };
    $.fn
});