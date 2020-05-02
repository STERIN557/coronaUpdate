

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
request.send();





$(".div1").click(()=>{
 $(".informations").css("display","block");
 $(".informations1").css("display","none");
 
})

$(".div2").click(()=>{
  $(".informations1").css("display","flex");
  $(".informations").css("display","none");
  
 })
 







//   mnlhlhhkhklhlk

var request1 = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request1.open('GET', 'https://api.covid19india.org/raw_data3.json', true)

request1.onload = function(response) {
    
var data1  = JSON.parse(this.response)

if (request1.status >= 200 && request1.status < 400) {
    //  console.log(data.Countries[0].Country)
    // console.log(data1.raw_data.lenght);

    for(let i=0;i<data1.raw_data.length;i++)
    {

     
     
    $("main").append(` 


    <div class="informations1">
          
    <p>Age : <span id="age"> ${data1.raw_data[i].agebracket || 'not available'}</span></p> 
    <p>Current Status : <span id="current"> ${data1.raw_data[i].currentStatus || 'not available'}</span></p>
    <p>Date Announced : <span id="date">${ data1.raw_data[i].dateannounced ||'not available'}</span></p>
    <p>district :<span id="district">${ data1.raw_data[i].detecteddistrict || 'not available'}</span></p>
    <p>State :<span id="state"> ${data1.raw_data[i].detectedState || 'not available'}</span></p>
    <p>Gender :<span id="gender"> ${data1.raw_data[i].gender || 'not available'}</span></p>
    <p>Info source : <span id="source"> ${data1.raw_data[i].source1  || 'not available'}</span></p>


   
</div>



`);
    


      
    }
 
} 
  
  else {
    console.log('error')
  }


  // Begin accessing JSON data here
}

// Send request
request1.send();





  
})







