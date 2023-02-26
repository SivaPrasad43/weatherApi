let weather = {
    apiKey:"b96bfb0db8628985f76d18399bacf1a6",
    fetchWeather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+this.apiKey)
   .then((response)=>{
    if(!response.ok){
        alert("No weather found.")
        throw new  Error("No weather found.");
    }
    return response.json();

   })
   .then((data)=>this.displayWeather(data));
},

displayWeather: function(data){
    const {name}=data;
    const {icon, description}=data.weather;
    const {temp,humidity}=data.main;
    const  {speed}=data.wind;
    document.querySelector(".city").imnnerText="Weather in"+ name;
    document.querySelector(".icon").src="https://openweathermap.org/img/wn/"+icon+".png";
    document.querySelector(".description").innerText=description;
    document.querySelector(".temp").innerText=temp+"°C";
    document.querySelector(".humidity").innerText="Humidity:"+humidity+"%";
    document.querySelector(".wind").innerText="Wind Speed:"+speed+"km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage=
    "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"+ name+"')";
},

search: function(){
    this.fetchWeather(document.querySelector(".search-bar"),value);

},
};
   
document.querySelector(".search-bar")
.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        weather.search();
    }
});

weather.fetchWeather("Ernakulam");