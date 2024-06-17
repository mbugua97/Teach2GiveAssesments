const addedDataJson=[];

const shoppingItems=[];//product lis


//simulating the api responce
function fetch() {
  const randomCartData = [
    { object: "phone", price: 20000 },
    { object: "laptop", price: 100000 },
    { object: "tablet", price: 8000 },
    { object: "tablet", price: 8000 },
   

   
  ];
  return new Promise((resolve, reject)=>{
    resolve({randomCartData})  
})}







//simulating the api call
async function getdata() {
    const addedDataJson=[];
  const requ = await fetch()
  requ.randomCartData.map((shopObj)=>{
    shoppingItems.push(shopObj)
  })
 
}

const shoppingDiv=document.querySelector('.shop')
shoppingDiv.textContent="buy objects"

const cartDiv=document.querySelector('.cart')
cartDiv.textContent="cart objects"

async function addData(dta){
    shoppingItems.push(dta) 
    console.log(dta);
}

getdata().then(()=>{
    
    shoppingItems.map((item)=>{
        const itemdiv=document.createElement('div')//items div
 
        itemdiv.style.marginTop="20px"
        itemdiv.style.width='200px'
    
        //object name
        const itemdivTitle=document.createElement('div')
        itemdivTitle.textContent=item.object
        itemdivTitle.style.marginRight='20px'
        itemdiv.append(itemdivTitle)

        //object price
        const itemdivprice=document.createElement('div')
        itemdivprice.textContent=`$ ${item.price}`
        itemdivprice.style.marginRight="20px"
        
        itemdiv.append(itemdivprice)

        //addbutton
        const button=document.createElement('button')
        button.textContent='addcart'
        button.onclick= function() {
            addData(item);
        };
        itemdiv.append(button)

        shoppingDiv.append(itemdiv)
    })
    addedDataJson.map((item)=>{

    })
   
})

function getCart(){}





