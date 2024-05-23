const data = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Music Festival",
    price: 50,
    date: "August 20, 2021",
    location: "Central Park, New York City",
    company: "Music Festivals Inc.",
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    title: "Food and Wine Expo",
    price: 75,
    date: "September 25, 2021",
    location: "Moscone Center, San Francisco",
    company: "Food and Wine Events LLC",
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Comic Con",
    price: 35,
    date: "October 15, 2021",
    location: "Los Angeles Convention Center",
    company: "Comic Con International",
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXJ0JTIwYW5kJTIwZGVzaWduJTIwZmFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Art and Design Fair",
    price: 20,
    date: "November 12, 2021",
    location: "Navy Pier, Chicago",
    company: "Art and Design Expo LLC",
  },
  {
    id: 5,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661766479722-ddedc5dce339?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    title: "Holiday Market",
    price: 5,
    date: "December 3, 2021",
    location: "Union Square, New York City",
    company: "Holiday Markets Inc.",
  },
  {
    id: 6,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661290419867-79072e8d5f00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29uY2VydCUyMHBhcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Concert in the Park",
    price: 20,
    date: "August 20, 2022",
    location: "Central Park, New York City",
    company: "Live Nation",
  },
  {
    id: 7,
    imageUrl:
      "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    title: "Food and Wine Festival",
    price: 50,
    date: "September 15-18, 2022",
    location: "Union Square, San Francisco",
    company: "Taste of San Francisco",
  },
  {
    id: 8,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1661602441396-67b89b6ac4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Summer Beach Party",
    price: 15,
    date: "July 3, 2022",
    location: "Venice Beach, Los Angeles",
    company: "LA Beach Parties",
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Angular Nation Expo",
    price: 35,
    date: "October 1-3, 2022",
    location: "Google Hall, San Fransico",
    company: "ArtExpo NY",
  },
  {
    id: 10,
    imageUrl:
      "https://images.unsplash.com/photo-1465310477141-6fb93167a273?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Sports and Adventure Expo",
    price: 20,
    date: "May 20-22, 2022",
    location: "McCormick Place, Chicago",
    company: "Google",
  },
];






function fetchData(input){
  return new Promise((resolve,reject)=>{
    if(input.length>0){
      resolve({input})
    }
    else{
      reject("no data passed")
    }
  })
}

async function calldata(){
  try{
 const dta1= await fetchData(data)
 let wrap=document.querySelector('.wrapper')
wrap.style.height='100vh'
wrap.style.width='100vw'

dta1.input.map((card)=>{
  console.log(card);

    const dv = document.createElement("div");
    dv.style.alignItems='center'
    dv.style.paddingLeft='20px'
    dv.style.marginTop="40px"
    dv.style.paddingRight='30px'
    dv.style.height='500px'
    dv.style.width='400px'
    dv.style.borderStyle='solid';
    dv.style.bordeWidth='5px';
    const img=document.createElement("img");
    img.style.width='400px'
    img.style.height='200px'



    const ttle=document.createElement("h1");
    const dte=document.createElement("p")
    const lctn=document.createElement("p")
    const prc=document.createElement("p")
    const btn=document.createElement("button")

    btn.textContent="Buy Now"
    btn.style.color="white"
    btn.style.backgroundColor='blue'
    btn.style.height='50px'
    btn.style.width='120px'
    btn.style.marginLeft='90px'

    img.src=card.imageUrl

    ttle.textContent=card.title
    ttle.style.marginLeft='20px'

    dte.textContent=card.date
    dte.style.marginLeft='90px'
    
    lctn.textContent=card.location
    lctn.style.marginLeft='50px'

    prc.textContent=card.price
    prc.style.marginLeft='150px'

    dv.append(img)
    dv.append(ttle)
    dv.append(dte)
    dv.append(lctn)
    dv.append(prc)
    dv.append(btn)
    wrap.appendChild(dv)
})


  }
  catch(error){
    console.log(error);

  }
}

calldata()















































































