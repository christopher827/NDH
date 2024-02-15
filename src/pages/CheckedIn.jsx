import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Founded from './Founded';

export const LocationContext = React.createContext(null);

function CheckedIn() {
  const location = useLocation();
  const { firstName, lastName, familyMember1, familyMember2, familyMember3, familyMember4 } = location.state;
  const [geographicInfo, setGeographicInfo] = useState(null);

  useEffect(() => {
    const fetchGeographicInfo = async () => {
      try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        const ipAddress = data.ip;

        const locationResponse = await fetch(`http://ip-api.com/json/${ipAddress}`);
        const locationData = await locationResponse.json();

        const { continent, country, city, lat, lon, region, timezone } = locationData;
        setGeographicInfo({ continent, country, city, latitude: lat, longitude: lon, region, timezone });
      } catch (error) {
        console.error('Error fetching geographic information:', error);
      }
    };

    fetchGeographicInfo();
  }, []);

  return (
    <div className='text-center'>
      <h1 className='font-bold mt-16'>
        Thank you for checking in, {firstName} <span className='text-blue'>{lastName}</span>
      </h1>
      <h3 className=''>
        We are relieved to hear that you're safe. Checking in will help your loved ones find the same <br />relief.
      </h3>
      <br />
      <p className=''>What your loved ones will see</p>
      <br />
      <div className='bg-blue inline-block rounded-xl p-4'>
        <h1>Name: {firstName} {lastName}</h1>
        <h2>Provided Location: {location.state.city}</h2>
        <h2>Family Member 1: {familyMember1}</h2>
        <h2>Family Member 2: {familyMember2}</h2>
        <h2>Family Member 3: {familyMember3}</h2>
        <h2>Family Member 4: {familyMember4}</h2>
        <br />
      </div>

      <p className=''>
        Last tracked location. Keep in mind that this location may not be 100% accurate. <br />
        We do our best to determine your location based on your IP address.
      </p>
      <br />
      <div className='bg-blue inline-block rounded-xl p-4'>
        <h2>Continent: {geographicInfo?.timezone}</h2>
        <h2>Country: {geographicInfo?.country}</h2>
        <h2>Region: {geographicInfo?.region}</h2>
        <h2>City: {geographicInfo?.city}</h2>
        <h2>Latitude: {geographicInfo?.latitude}</h2>
        <h2>Longitude: {geographicInfo?.longitude}</h2>

        <LocationContext.Provider value={geographicInfo}>
          <Founded />
        </LocationContext.Provider>
      </div>
      
    </div>
  );
}

export default CheckedIn;
