
$(".notifymetitle.notifyme-title").text("Produto indisponível");
$(".sku-notifyme-form p").text("Avise-me quando estiver disponível");


setTimeout(function () {
    $(".glis-popup-link.glis-thickbox.tb-added.qvBinded", "body").html(`<img src="/arquivos/CORACAO2.png" style="max-width: 18px"> ADICIONAR A LISTA DE DESEJOS`);
    $("#TB_closeWindowButton").html(`<img src="/arquivos/menu-close.png" style="max-width:25px"/>`);
    $(".user-review h4").text("AVALIAÇÕES");
}, 2000);


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


if($(".bread-crumb").text().includes("CALÇADOS") || $(".bread-crumb").text().includes("BOLSAS") || $(".bread-crumb").text().includes("ACESSÓRIOS")) {
    $(".tabela-de-medidas").hide()
}

/*
skuJson.skus.forEach(element => {
    
});*/