// ! futura biblioteca (alternar Abas e paineis correlatos)

jQuery(function ($) {
    $.fn.altAbasPaineisAuto = function (e)    {
        $('.tab-curvado').on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            // console.log($(this))
            let tabIndex = $(this).index()
            // console.log('↓ tabIndex ↓')
            // console.log(tabIndex)
            $(this).addClass('activeGrade')
            $('.tab-curvado').not(':eq('+tabIndex+')').removeClass('activeGrade')

            $('.paginas').each(function(index, item){
                console.log('Painel tab: '+index)
                console.log(tabIndex)
                console.log('tab index em paineis: '+tabIndex)
                // console.log($(item))
                if(index === tabIndex ){
                    $(item).addClass('activeGrade')
                    // $(item).html('Página: '+(index));
                } else {
                    $(item).removeClass('activeGrade')
                }
            })
        })
    };
    $.fn
});