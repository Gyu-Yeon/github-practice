import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

function App() {

  
  return (
    <div className="App">
     <div className="mainContainer">
       <div className="navbar">
        <div className="logo">
          Logo
        </div>
        <div className="timeline">
          timeline
        </div>
        <div className="profile">
          profile
        </div>
       </div>
       <div className="mainpage">
         <div className="sidebar">
          <div className="profile-pic">
            <div className="circle">

            </div>
            <p>사용자님</p>
          </div>
         </div>
         <div className="maindisplay">
          
          <div className="slideMainDisplay"></div>
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;
