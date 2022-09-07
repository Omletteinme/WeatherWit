let place;

document.getElementById("searchbtn").onclick = function(){
    place = document.getElementById("placeSearch").value;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c0751244c0mshe437dc27db2f15cp1ab5c4jsnb412bd86a993',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

//today data fetch

fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${place}`, options)
.then(function(response) {
	if(!response.ok) {
	  document.getElementById("todayTitle").innerText = "Place Could not be found!"
	  document.getElementById("todayPlace").innerText = "Place Could not be found!"
	  document.getElementById("todayFeels").innerText = ""
	  document.getElementById("todayTemp").innerText = ""
	  document.getElementById("todayHumidity").innerText = ""
	  document.getElementById("todayWind").innerText = ""
	  document.getElementById("todayPrecip").innerText = ""
	  document.getElementById("todayImg").src = ""
	}
	console.log(response)
	return response.json()
  })
  .then(function(result) {
	if(result.stat === "fail") {
	  throw new Error(result.error);
	}
	else{
		console.log(result);
		document.getElementById("todaydata").style.display = "block";
		document.getElementById("todayTitle").innerText = "TODAY'S WEATHER " + result.location.localtime
		document.getElementById("todayPlace").innerText = result.location.country + ', ' + result.location.region + ', ' + result.location.name;
		document.getElementById("todayImg").src = result.current.condition.icon;
		document.getElementById("todayFeels").innerText = result.current.condition.text;
		document.getElementById("todayTemp").innerText = "Temp: " + result.current.temp_c + String.fromCharCode(176) + "C";
		document.getElementById("todayHumidity").innerText = "Humidity: " + result.current.humidity;
		document.getElementById("todayWind").innerText = "Wind: " + result.current.wind_kph  + "kph"+ `(${result.current.wind_dir})`;
		document.getElementById("todayPrecip").innerText = "Precipitation: " + result.current.precip_in + 'in';
	}
})

//tmrw data fetch

fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${place}&days=1`, options)
.then(function(response) {
	if(!response.ok) {
		document.getElementById("tmrwTitle").innerText = "Place Could not be found!"
		document.getElementById("tmrwPlace").innerText = "Place Could not be found!"
		document.getElementById("tmrwFeels").innerText = ""
		document.getElementById("tmrwTemp").innerText = ""
		document.getElementById("tmrwHumidity").innerText = ""
		document.getElementById("tmrwWind").innerText = ""
		document.getElementById("tmrwPrecip").innerText = ""
		document.getElementById("tmrwImg").src = ""
	}
	console.log(response)
	return response.json()
  })
  .then(function(result) {
	if(result.stat === "fail") {
	  throw new Error(result.error);
	}
	else{
		console.log(result);
		document.getElementById("tmrwdata").style.display = "block";
		document.getElementById("tmrwTitle").innerText = "TOMORROW'S WEATHER " ;
		document.getElementById("tmrwPlace").innerText = result.location.country + ', ' + result.location.region + ', ' + result.location.name;
		document.getElementById("tmrwImg").src = result.current.condition.icon;
		document.getElementById("tmrwFeels").innerText = result.current.condition.text;
		document.getElementById("tmrwTemp").innerText = "Temp: " + result.current.temp_c + String.fromCharCode(176) + "C";
		document.getElementById("tmrwHumidity").innerText = "Humidity: " + result.current.humidity;
		document.getElementById("tmrwWind").innerText = "Wind: " + result.current.wind_kph  + "kph"+ `(${result.current.wind_dir})`;
		document.getElementById("tmrwPrecip").innerText = "Precipitation: " + result.current.precip_in + 'in';
	}
	})
	
}