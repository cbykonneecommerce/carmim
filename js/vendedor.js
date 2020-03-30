

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
    let results = await fetch("/api/dataentities/CV/search?_fields=codigo")
      .then(response => {
        return response.json();
      });
    console.log(results);

      for(let i = 0; i < results.length; i++) {
        if(vendedorCode == results[i].codigo) {
          codeConfirmation = true;
          break;
        }
      }

      if(codeConfirmation) {
        $("#codigologista").css({"border-color": "black"});
        $(".lojista-codigo small").hide()

        vtexjs.checkout.getOrderForm()
        .then(function (orderForm) {
          let marketingData = orderForm.marketingData;
          marketingData.utmSource = vendedorCode;
          return vtexjs.checkout.sendAttachment('marketingData', marketingData)
        }).done(function (orderForm) {
          console.log("Nome alterado!");
          console.log(orderForm.marketingData);
        })
      } else {
        $("#codigologista").css({"border-color": "red"});
        $(".lojista-codigo small").remove()
        $(".lojista-codigo").append("<small><br/>Digite um código de vendedor valido</small>")
      }

    



   

  })






}, 1000)