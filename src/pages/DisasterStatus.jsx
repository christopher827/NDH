import React,{useState}from 'react'
import axios from "axios"
import "./DisasterStatus.css"

function DisasterStatus() {
const[data,setData]=useState({})
const[location,setLocation]=useState('')
const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5413c6e5afd69aa4d79769f4e1429241`
const searchLocation = (event) => {
if (event.key === 'Enter') {
axios.get(url).then((response) => {
          setData(response.data);
})
.catch((error) => {
if (error.response && error.response.status === 404) {
setData({ name: null }); // Set name as null to indicate location not found
 }
 else {
console.error(error);
}
});
setLocation('');
 }
 };
return (
<div className="app">
<div className="search">
<input value={location} onChange={(event) => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter Location" type="text"/>
</div>

<div className="container">
<div className="top">
<div className="location">
<p className="text-3xl sm:text-4xl md:text-5xl font-medium mb-10">{data.name}</p>
  </div>

<div className="temp">
{data.main ? <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  text-blue font-black leading-7 md:leading-10">{data.main.temp.toFixed()}°F</h1> : null}
 </div>

<div className="description">
{data.weather ? <p className="text-3xl sm:text-4xl md:text-5xl font-medium">{data.weather[0].main}</p> : null}
</div>
</div>

{data.name !== undefined && (
 <div className="bottom">
 <div className="feels">
 {data.main ? (
<p className="text-2xl sm:text-4xl md:text-5xl font-medium">{data.main.feels_like.toFixed()}°F</p>
 ) : null}
<p className="text-xl lg:text-3xl xl:text-4xl  font-semibold">Feels Like</p>
</div>

<div className="humidity">
{data.main ? <p className="text-2xl sm:text-4xl md:text-5xl font-medium">{data.main.humidity}%</p> : null}
<p className="text-xl lg:text-3xl xl:text-4xl  font-semibold">Humidity</p>
</div>

<div className="wind">
{data.main ? <p className="text-2xl sm:text-4xl md:text-5xl font-medium">{data.wind.speed.toFixed()}MPH</p> : null}
<p className="text-xl lg:text-3xl xl:text-4xl  font-semibold">Wind Speed</p>
</div>
</div>
      )}
{!data.name && (
<div className="text-center">
<p className='text-3xl sm:text-4xl md:text-5xl font-medium'>Enter Location to Search</p>
</div>
 )}
</div>
</div>
);  }
  export default DisasterStatus;