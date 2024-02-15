import React from 'react';
import './App.css';
import FindAPerson from './pages/FindAPerson';
import Home from "./pages/Home"
import CheckIn from './pages/CheckIn';
import { Route, Routes } from 'react-router-dom';
import DisasterStatus from './pages/DisasterStatus';
import VictimData from './pages/VictimData';
import CheckedIn from './pages/CheckedIn';
import Founded from './pages/Founded';
import PageNotFound from './pages/PageNotFound';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

function App() {

  return (
<>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/findaperson' element={<FindAPerson/>}/>
<Route path='/checkin' element={<CheckIn/>}/>
<Route path='/disasterstatus' element={<DisasterStatus/>}/>
<Route path='/victimdata' element={<VictimData/>}/>
<Route path="/checkedin" element={<CheckedIn/>}/>
<Route path='/founded' element={<Founded/>}/>
<Route path='*' element={<PageNotFound/>}/>

</Routes>
<Footer/>
</>
    );
}

export default App;
 //0b3656add1d6439a917cae67272bb666