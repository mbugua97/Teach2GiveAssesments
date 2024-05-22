let total=0;

let totalOutput=document.querySelector('#total')
let totalquantitylabel=document.querySelector('#quantity-label')

//
function add() {
  let price = document.querySelector("#price")
  let quantity = document.querySelector("#quantity")
  totalquantitylabel.textContent=quantity.value
  total=parseInt(price.value)*parseInt(quantity.value)
  totalOutput.textContent=`$ ${total}`
}
