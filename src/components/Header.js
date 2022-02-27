import React from 'react';
import '../index.css';

import bannerimg3 from'../images/bannerimg3.jpg';
import bannerimg2 from'../images/bannerimg2.jpg';
import bannerimg1 from'../images/bannerimg1.jpg';
import bannerimg4 from'../images/movies.jpg';


function Header() {
  return (
    <div className="Header">
      <img src={require('../images/bannerimg5.jpg') }  className="bannerimg"></img>
      <div className='innerbannerdiv'>
        <div className='navitemsdiv'>
          <a href='#'>Write a Review</a>
          <a href='#'>Events</a>
          <a href='#'>Talks</a>
          <a href='#'>Highly Rated</a>
          <div className='navitemsdiv2'>
            <a href='#'>Login </a>
            <button>Register</button>
          </div>
        </div>
        <div className='searchbardiv'>
          <h1>Search</h1>
          <input  placeholder={"Restaurant, Movies, Gadgets, More ...."}></input>
          <div class="vl"></div>
          <h1>Location</h1>
          <input  placeholder={"Adrress, Street, City, State, Country "}></input>
          <button ><img src={require('../images/search.png') }  className="searchimg"/></button>

        </div>
        

      </div>
      
    </div>
    
  );
}

export default Header;


