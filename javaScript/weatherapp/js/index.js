const apikey = "e79dbb582638a03999461da3a7e13223";

let apiurl = "https://api.openweathermap.org/data/2.5/weather";

let queryParams = { q: "loc", appid: "e79dbb582638a03999461da3a7e13223" };

const fetchweatherdata = async (newUrl) => {
  try {
    const res = await fetch(newUrl);
    return res.json();
  } catch (error) {
    alert(error);
  }
};

async function weather(event) {
  event.preventDefault();
  const cityname = document.querySelector("#input").value;
  queryParams.q = cityname;
  const queryString = new URLSearchParams(queryParams).toString();
  const newUrl = `${apiurl}?${queryString}`;
  //fetching the api
  try {
    const res = await fetchweatherdata(newUrl);
    const locdiv = document.querySelector(".locationweather");
    locdiv.style.backgroundColor = "transparent";
    locdiv.style.boxShadow = "1px 1px 1px 1px";
    const country = res["sys"];
    const wth = res["weather"];
    const descri = wth[0].description;
    const ctry = country.country;
    const maindata = res["main"];
    const ltn = res["name"];
    const temp = maindata.temp;
    const pres = maindata.pressure;
    const hmty = maindata.humidity;
    const vsblity = res["visibility"];
    const wind = res["wind"];
    const windSpeed = wind.speed;
    const cloud = res["clouds"];
    const cloudall = cloud.all;

    //location title
    const locations = document.createElement("div");
    locations.classList.add("locationtitle");
    locations.style.display = "flex";
    locations.style.flexDirection = "row";
    locations.style.columnGap = "30px";

    //image div
    const sundiv = document.createElement("div");
    const imagediv = document.createElement("img");
    imagediv.classList.add("sunimage");
    imagediv.src = "js/sun.svg";
    sundiv.appendChild(imagediv);

    locations.appendChild(sundiv);

    const today = document.createElement("div");
    const tydndiv = document.createElement("h2");
    tydndiv.classList.add("today");
    tydndiv.classList.add("poetsen-one-regularl");
    tydndiv.textContent = "Today";
    today.appendChild(tydndiv);

    const locationdiv = document.createElement("div");
    locationdiv.classList.add("values");
    locationdiv.classList.add("poetsen-one-regularl");
    locationdiv.textContent = `${ltn}`;
    today.appendChild(locationdiv);

    const tempdiv = document.createElement("div");
    tempdiv.style.marginTop="20px"
    tempdiv.classList.add("values");
    tempdiv.textContent = `TEMPRATURE: ${temp}`;
    today.appendChild(tempdiv);

    const descridiv = document.createElement("div");
    descridiv.classList.add("values");
    descridiv.textContent = `${descri} `;
    today.appendChild(descridiv);
    locations.appendChild(today);

    locdiv.appendChild(locations);
  } catch {
    alert("failed to fetch data");
  }
}
