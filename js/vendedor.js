

setTimeout(()=>{
    $(".mini-cart-footer").prepend(`
    <div class="lojista-codigo" style="margin-bottom: 20px;">
    <label style="margin-right: 2em;">Código do vendedor</label>
    <input type="text" id="codigologista" placeholder="Vendedor, insira seu código aqui" style="border-radius: 0px;
    width: 52%;
    border-color: black;
    padding-left: 8px"/>
    </div>
    `);



    $(".lojista-codigo #codigologista").on("change paste keyup",  async function(){
    let vendedorCode = $("#codigologista").val();
    console.log(vendedorCode)
    let results = await fetch("/api/dataentities/CV/search?_fields=codigo")
                            .then(response =>{
                              return response.json();  
                            });
    if(!results)
    


    vtexjs.checkout.getOrderForm()
    .then(function(orderForm) {
        let marketingData =  orderForm.marketingData;
     marketingData.utmSource = vendedorCode;
      return vtexjs.checkout.sendAttachment('marketingData', marketingData)
    }).done(function(orderForm) {
      console.log("Nome alterado!");
      console.log(orderForm.marketingData);
    })

})
   




 
},1000)