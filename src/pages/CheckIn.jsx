import React, { useState } from 'react'
import { collection,addDoc,query,where,getDocs } from 'firebase/firestore'
import { db } from '../Firebaase'
import { useNavigate } from 'react-router-dom'
import {IoIosArrowDroprightCircle} from "react-icons/io"

function CheckIn() {
const navigate=useNavigate()
const [firstName,setFirstName]=useState('')
const [lastName,setLastName]=useState('')
const [city,setCity]=useState('')
const [familyMember1,setFamilyMember1]=useState('')
const [familyMember2,setFamilyMember2]=useState('')
const [familyMember3,setFamilyMember3]=useState('')
const [familyMember4,setFamilyMember4]=useState('')

const handleSubmit = async (e) => {
  e.preventDefault();

  if (firstName.trim() === '' || lastName.trim() === '' || city.trim() === '') {
    alert('Please make sure to fill all required fields');
    return;
  }

  // Get the user's position using Geolocation API
  if (!navigator.geolocation) {
    alert("Geolocation is not supported by your browser.");
    return;
  }

  try {
    // Using the Geolocation API to get the user's position
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const formData = {
          firstName,
          lastName,
          city,
          familyMember1,
          familyMember2,
          familyMember3,
          familyMember4,
          latitude,
          longitude, // Add latitude and longitude to the form data
        };

        const querySnapshot = await getDocs(
          query(
            collection(db, 'formEntries'),
            where('firstName', '==', firstName),
            where('lastName', '==', lastName),
            where('city', '==', city),
            where('familyMember1', '==', familyMember1),
            where('familyMember2', '==', familyMember2),
            where('familyMember3', '==', familyMember3),
            where('familyMember4', '==', familyMember4)
          )
        );

        if (!querySnapshot.empty) {
          alert("You've Checked in already. You can't Check in twice");
          return;
        }

        // Save the form data with location (latitude and longitude) to Firestore
        const docRef = await addDoc(collection(db, 'formEntries'), formData);
        console.log('Document written with ID: ', docRef.id);

        // Clear the form fields after successful submission
        setFirstName('');
        setLastName('');
        setCity('');
        setFamilyMember1('');
        setFamilyMember2('');
        setFamilyMember3('');
        setFamilyMember4('');

        navigate('/checkedin', { state: formData });
      },
      (error) => {
        console.error('Error getting user location: ', error);
        alert('Error getting user location. Please try again later.');
      }
    );
  } catch (error) {
    console.error('Error adding document: ', error);
    alert('Error submitting form. Please try again later.');
  }
};

  return (
      <div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>

<form action="">
<h1 className='text-[80px] font-bold text-center text-white'>Check <span className='text-blue'>In</span></h1>

<input placeholder='First name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Last name' value={lastName} onChange={(e)=>setLastName(e.target.value)} className="w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue"/>
<input placeholder='City' value={city} onChange={(e)=>setCity(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Family Member 1' value={familyMember1} onChange={(e)=>setFamilyMember1(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Family Member 2' value={familyMember2} onChange={(e)=>setFamilyMember2(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Family Member 3' value={familyMember3} onChange={(e)=>setFamilyMember3(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Family Member 4' value={familyMember4} onChange={(e)=>setFamilyMember4(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<div className='flex justify-center items-center '>
<button className=' btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base shadow-xl' onClick={handleSubmit}>      
Submit<IoIosArrowDroprightCircle className="text-2xl lg:text-3xl"/>
</button>
</div>

</form>
</div>
  )
}
export default CheckIn