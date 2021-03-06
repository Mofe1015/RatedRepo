import React from 'react';
import '../index.css';

import bannerimg3 from'../images/bannerimg3.jpg';
import bannerimg2 from'../images/bannerimg2.jpg';
import bannerimg1 from'../images/bannerimg1.jpg';
import bannerimg4 from'../images/movies.jpg';
function TopNav(){
  return(
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
  )
}

function SearchBar(){
  return(
    <div className='searchbardiv'>
          <h1>Search</h1>
          <input  placeholder={"Restaurant, Movies, Gadgets, More ...."}></input>
          <div className='vl'></div>
          <h1>Location</h1>
          <input  placeholder={"Adrress, Street, City, State, Country "}></input>
          <button ><img src={require('../images/search.png') }  className="searchimg"/></button>

        </div>
  )
}

function BtmNav(){
  return(
    <div className='btmnavitemsdiv'>
      <img className='navimg' src={require('../images/restaurant3.png') } />
      <a href='#'>Restaurants</a>
      <img className='navimg' src={require('../images/phone.png') } />
      <a href='#'>Gadgets</a>
      <img className='navimg' src={require('../images/services1.png') } />
      <a href='#'>Local Services</a>
      <img className='navimg' src={require('../images/video.png') } />
      <a href='#'>Movies</a>
  </div>
  )
}

function HeaderItems(){
  return(
    <div className="Header">
      <img src={require('../images/bannerimg14jpg.jpg') }  className="bannerimg"></img>
      <div className='innerbannerdiv'>
        <TopNav/>
        <SearchBar/>
        <BtmNav/>
        <img src={require('../images/Rated-logos_white.png') }  className="logo"></img>     
      </div>
      
    </div>
  )
}




export default function Header() {
  return (
    <HeaderItems/>
  );
}




