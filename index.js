

$(document).ready(()=>{

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.covid19api.com/summary', true)

request.onload = function(response) {
    
var data  = JSON.parse(this.response)

if (request.status >= 200 && request.status < 400) {
    //  console.log(data.Countries[0].Country)
for(let i=0;i<data.Countries.length;i++){

    $("main").append(` <div class="informations">
    <p>Country Name : <span id="country"> ${data.Countries[i].Country} </span></p>
  
   <p> New Confirmed Cases: <span id="NconfirmCa">${data.Countries[i].NewConfirmed}</span></p>
  
<p>      Total Confirmed Cases: <span id="tconfirmD">${data.Countries[i].TotalConfirmed}</span></p>

   <p> New Deaths : <span id="Ntdeath">${data.Countries[i].NewDeaths}</span></p>
    
   <p> Total Deaths: <span id="tdeath" >${data.Countries[i].TotalDeaths}</span></p>
   <p>New Recovered: <span id="nrecovered">${data.Countries[i].NewRecovered}</span></p>
    <p>Total Recovered: <span id="trecovered">${data.Countries[i].TotalRecovered}</span></p>
    <p> Date: <span id="dates">${data.Countries[i].Date}</span></p>
</div>`);

  }
} 
  
  else {
    console.log('error')
  }


  // Begin accessing JSON data here
}

// Send request
request.send()
  
})