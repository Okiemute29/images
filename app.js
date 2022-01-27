var select = document.getElementsByClassName("select1")
var select2 = document.getElementsByClassName("select2")
var input = document.querySelectorAll("input")
var url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,BTS,LTC,DASH,FCT,MONA,NMC,XLM,USDT&tsyms=USD,EUR,NGN"
var key = "&api_key=f03f4ca7933035287f299f9133e31a665baf373d92901b4ba1d1a2ed4f357a6a"
var option1html = ""
var option2html = ""




async function currency(){
   // fetching data from API
    var res = await fetch(url + key)
   // convert to data that we can use
    var data = await res.json()
    // to access the object keys
    var coin = Object.keys(data)
    Object.values(data).forEach(function(element){
     currency = Object.keys(element)
     rates = Object.values(element)
    })
   // Option button
   coin.map(item => {
     option1html += '<option value='  +item +'>' +item+ '</option>'
     return option1html
    })
   currency.map(item => {
     option2html += '<option value='  +item +'>' +item+ '</option>'
     return option2html
    })
    // inputing innerHTML
   for(var i=0; i<select.length; i++){
     select[i].innerHTML = option1html
    }
   for(var i=0; i<select2.length; i++){
     select2[i].innerHTML = option2html

    }
    
    //Linking both Input value
   
    input[0].addEventListener("keyup", (function(){
     input[1].value = input[0].value*data[select[0].value][select2[0].value]
   })
  )
   
    input[1].addEventListener("keyup", (function(){
     input[0].value = input[1].value / data[select[0].value][select2[0].value]
   })
  )
  
  

  
    // linking the canges in dropdpwn menu
    select[0].addEventListener("change", (function(){
     input[1].value = input[0].value*data[select[0].value][select2[0].value]
   })
  )
   
   
    select2[0].addEventListener("change", (function(){
     input[0].value = input[1].value / data[select[0].value][select2[0].value]
   })
  )
}


currency()
  