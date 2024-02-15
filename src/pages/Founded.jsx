import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { LocationContext } from './CheckedIn';

function Founded() {
  const location = useLocation();
  const { person, notFound } = location.state || {};
  const geographicInfo = useContext(LocationContext);
console.log(geographicInfo?.longitude)

  if (notFound) {
    return (
      <div className='text-center mx-auto'>
        <p className='h-70vh'>The person you entered is not recognized in our database</p>
      </div>
    );
  }

  if (person) {
    const { firstName, lastName, city, familyMember1, familyMember2, familyMember3, familyMember4 } = person;

    return (
      <div className='text-center'>
        <div className='bg-blue inline-block rounded-xl p-4 '>
          <h4>
            <span className='font-bold text-[32px]'>First name:</span>
            <span className='text-[32px] font-bold'>{firstName}</span>
          </h4>
          <h2 className='text-center'>
            <span className='text-[32px] font-bold'>Last name:</span>
            <span className='text-[32px] font-bold'>{lastName}</span>
          </h2>

          <h2 className='text-center'>
            <span className='font-bold text-[32px]'>Hometown:</span>
            <span className='text-[32px] font-bold'>{city}</span>
          </h2>

          <h2 className='text-center'>
            <span className='text-[32px] font-bold'>Family Member 1:</span>
            <span className='text-[32px] font-bold'>{familyMember1}</span>
          </h2>

          <h2 className='text-center'>
            <span className='font-bold text-[32px]'>Family Member 2:</span>
            <span className='text-[32px] font-bold'>{familyMember2}</span>
          </h2>

          <h2 className='text-center'>
            <span className='font-bold text-[32px]'>Family Member 3:</span>
            <span className='text-[32px] font-bold'>{familyMember3}</span>
          </h2>

          <h2 className='text-center'>
            <span className='font-bold text-[32px]'>Family Member 4:</span>
            <span className='text-[32px] font-bold'>{familyMember4}</span>
          </h2>

          <LocationContext.Consumer>
  {(geographicInfo) => (
          <h2 className='text-center'>
            <span className='font-bold text-[25px]'>Last Tracked GeoLocation:</span>
            <span className='text-[32px] font-bold'>{geographicInfo?.longitude}</span>
          </h2>
  )}
</LocationContext.Consumer>
        </div>
      </div>
    );
  }

  return null;
}

export default Founded;
