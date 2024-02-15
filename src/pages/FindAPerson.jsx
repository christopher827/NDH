import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { collection,query,where,getDocs } from 'firebase/firestore';
import { db } from '../Firebaase';

function FindAPerson() {
  const navigate=useNavigate();
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [city,setCity]=useState('')

const findPerson=async(e)=>{
e.preventDefault();
if (firstName.trim()==='' || lastName.trim()==='' || city.trim()==='') {
alert("Please fill all required field")
return;
}
try {
const personQuery=query(collection(db,'formEntries'),where('firstName', '==', firstName),where('lastName', '==', lastName),where('city','==',city))
const querySnapshot=await getDocs(personQuery);
const matchingPersons=querySnapshot.docs.map((doc)=>doc.data())

if (matchingPersons.length>0) {
//Person found, navigate to Founded page with the person's data
  navigate('/founded',{state:{person:matchingPersons[0]}})
}
else{
//Person not Founded, navigate to Founded page with a "Person not found message"
navigate('/founded',{state:{notFound:true}})
}

} catch (error) {
  console.log("Error searching for person",error)
}

console.log("It worked")
}

  return (
    <div className="flex justify-center items-center ">   
<div className='max-w-[400px] mx-auto min-h-[600px] px-4 py-20'>
<form>
<h1 className='text-[80px] font-bold text-center text-white '>Find<span className='text-blue'>Person</span></h1>

<input placeholder='First Name' value={firstName} onChange={(e)=>setFirstName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='Last Name' value={lastName} onChange={(e)=>setLastName(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<input placeholder='City of Residency' value={city} onChange={(e)=>setCity(e.target.value)} className='w-full p-2 bg-primary border border-input rounded-2xl outline-none mb-4 text-blue'/>
<div className='flex justify-center items-center '>
<button onClick={findPerson} className=' btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base shadow-xl'>Find Person</button>
</div>
</form>
</div>

    </div>
  )
}

export default FindAPerson