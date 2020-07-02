

setTimeout(() => {
  $(".mini-cart-footer").prepend(`
    <div class="lojista-codigo" style="margin-bottom: 20px;">
    <label>Se for um vendedor de nossas lojas<br> inclua seu código aqui</label>
    <input type="text" id="codigologista" placeholder="Vendedor, insira seu código aqui" style="border-radius: 0px;
    width: 66%;
    border-color: black;
    padding-left: 8px"/>
    </div>
    `);



  $(".lojista-codigo #codigologista").on("change paste keyup", async function () {
    let vendedorCode = $("#codigologista").val();
    let codeConfirmation = false;
    console.log(vendedorCode)

  

    let results = await fetch(`/api/dataentities/CV/search?_fields=codigo&codigo=*${vendedorCode}*`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json', "Accept": "application/vnd.vtex.ds.v10+json"
      }
    })
      .then(response => {
        return response.json();
      });
    console.log(results);

    if (vendedorCode == results[0].codigo) {
      codeConfirmation = true;
      console.log("existe")

    }

    if (codeConfirmation) {
      $("#codigologista").css({ "border-color": "black" });
      $(".lojista-codigo small").hide()

      vtexjs.checkout.getOrderForm()
        .then(function (orderForm) {
          let marketingData = {}

          if (!orderForm.marketingData) {
            marketingData = {
              coupon: null,
              marketingTags: [],
              utmCampaign: null,
              utmMedium: null,
              utmSource: null,
              utmiCampaign: null,
              utmiPart: null,
              utmipage: null
            }
          }
          marketingData.utmSource = vendedorCode;
          return vtexjs.checkout.sendAttachment('marketingData', marketingData)
        }).done(function (orderForm) {
          console.log("Nome alterado!");
          console.log(orderForm.marketingData);
          $(".lojista-codigo small").remove()
          $(".lojista-codigo").append("<small><br/>Código valido</small>")
        })
    } else {
      $("#codigologista").css({ "border-color": "red" });
      $(".lojista-codigo small").remove()
      $(".lojista-codigo").append("<small><br/>Digite um código de representante valido</small>")
    }









  })






}, 1000)