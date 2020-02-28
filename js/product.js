
    $(".notifymetitle.notifyme-title").text("Produto indisponível");
    $(".sku-notifyme-form p").text("Avise-me quando estiver disponível");
$(".user-review h4").text("AVALIAÇÕES");


    $(".dropdown-container").hide();
    $(".dropdown-btn#descricao").toggle(() => {

$(".dropdown-btn#descricao i").attr('class', 'fa fa-minus');
$(".dropdown-container#descricao").slideDown()
}, () => {
$(".dropdown-container#descricao").slideUp()
$(".dropdown-btn#descricao i").attr('class', 'fa fa-plus');
})


$(".dropdown-btn#especificacao").toggle(() => {
$(".dropdown-btn#especificacao i").attr('class', 'fa fa-minus');
$(".dropdown-container#especificacao").slideDown()
}, () => {
$(".dropdown-container#especificacao").slideUp()
$(".dropdown-btn#especificacao i").attr('class', 'fa fa-plus');
})
