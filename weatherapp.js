const time = document.getElementById("time");
const date = document.getElementById("date");
const weather = document.getElementById("weather");
const searchBar= document.getElementById("searchBar");
const dropdown = document.getElementById("dropdown");
const option = document.getElementById("option");
const cityElement = document.getElementById("city_name");
date.textContent= new Date().toDateString();
time.textContent = new Date().toLocaleTimeString('en-US');

changeCity('Siloam Springs','United States');
//The code needs to be changed for this
const weatherCode = {

    '0': ['Sunny',"#349CF5"],
    '1': ['Rainy',"#3C80E1"],
    '2': ['Windy','#2FCCF5'],
    '3': ['thunderstorm', '#7948BD'],
    '4': ['cloudy', "232359"],
    '5': ['snow','63C7FB'],
}
dropdown.style.visibility="hidden";
fetchWeather("36.1859","-94.5416");
//adds data to the dropdown
function addtoSearchBar(something){
  option.textContent=something;

}

function changeCity(city,country){
        
        cityElement.textContent = city+" , "+ country;
        // You can add additional actions here when the city is clicked
    
}

function accessAPIinformation(data){

    if(data.length>0)
        {
           
         dropdown.style.visibility="visible";
         const data_ = data[0];
         const city = data_.address['city'];
         const country = data_.address['country'];
         if ( 'city'in data_.address )
         {
          addtoSearchBar(city +  " ," + country);
          option.cityElement.addEventListener('click',()=>{changeCity(city,country);
            searchBar.value=""; })  ;
        }
        
       
    }
    //If the input box is empty nithings should be displayed
    //This can also be done with a list of options

   else if(searchBar.value.length===0)
   {
    dropdown.style.visibility="hidden";
}
}


function fetchWeather(lat,lon){
    fetch("https://api.open-meteo.com/v1/forecast?latitude="+lat+"&longitude="+lon+"&current=temperature_2m,is_day,weather_code,rain&temperature_unit=fahrenheit")
.then((response)=>{
    return response.json();
})
.then((data) => {
    
   
    weather.textContent = data.current["temperature_2m"];

})
}
//Whenever the user's key is up
searchBar.onkeyup=()=>{
    const geocode = searchBar.value;
    fetch("https://nominatim.openstreetmap.org/search?addressdetails=1&format=json&q="+geocode+"&limit=3")
    //gets the json file
    .then(response => {return response.json()})
    //adds the data
    .then(data => 
        {
       
            accessAPIinformation(data);
            fetchWeather(data[0].lat,data[0].lon);
        } 

)
    }


  




/*
const users = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
.then((response)=>{
    return response.json();
})
.then((data) => {
   console.log(data.elevation);
})*/