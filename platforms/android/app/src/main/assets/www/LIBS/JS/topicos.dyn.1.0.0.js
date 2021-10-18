// criar topicos com dinâmicas -v1.0.0.

// → 1° Fase: para cada H1 add class xT1 (x Título 1 => H1)

$('.leitor > h1').each(function () {
    $(this).addClass('xT1') // para cada H1 add class xT1
})


// → 2° Fase:


// var timer;
// var timeout = 1000;
// $('.leitor > h1').mousedown(function () {
//     console.log($(this))
//     timer = setTimeout(function () {
//         console.log('Pressionado por mais de 1s')
//     }, 1000);
//     return false;
// });
// $(document).mouseup(function () {
//     clearTimeout(timer);
//     return false;
// })

// $('.leitor > h1').mouseup(function(){
//     clearTimeout(pressTimer);
//     // Clear timeout
//     return false;
//   }).mousedown(function(){
//     // Set timeout
//     pressTimer = window.setTimeout(function() {
//         console.log('Pressionado por mais de 1s -X2')
//     },1000);
//     return false;
// })

$demo = $('.leitor > h1')


var timer;
var timeout = 1000;
$demo.on("touchstart", $demo,function(e){
    let $this = $(this)
    timer = setTimeout(function () {
        $this.toggleClass('selc')
        console.log('Pressionado por mais de 1s')
    }, 1300);
    return false;
})
$(document).on("touchend", $demo,function(e){
    clearTimeout(timer)
    console.log('touchend: stop 1s')
    console.log('Head - 1 ')
    // text = ('#demo').html()
    $demo.html($demo.html())
    return false;
})
