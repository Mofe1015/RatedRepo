import React from 'react';
import '../index.css';
import CardData from './CardData';

function TopCardDiv({img, badgeText}){
    let badgeTextvar
    let colorvar
    if (badgeText === "closed") {
        badgeTextvar = "CLOSED"
        colorvar = 'red'
        
    } else if (badgeText === "opened") {
        badgeTextvar = "OPEN"
        colorvar = 'green'
    }
    
    return(
        <div className='itmimgdiv'>
             <a href='#'>
               
                <img className='itmimg' src={img} />
                 <div style={{ color: colorvar }} className="card--badge">{badgeTextvar}</div>

             </a>
            
            
        </div>
    )
};

function BtmCardDiv({itemName, storeLocation, country, Rating}){
    return(
        <div className='btmcarddiv'>
            <div className='itemnameandlocationdiv'>
               
                <div className='itemname'>
                    <img className='itemnameimg' src={require('../images/restaurant3.png') } />
                    <a href='#' className='itemnametxt'>{itemName}</a>
                </div>
                <div className='itemlocation'>
                <img className='itemnameimg' src={require('../images/mapicon.png') } />
                    <a href='#' className='itemnametxt'>{storeLocation}</a>
                </div>

            </div>
            <div className='rateinfo'>
                <div className='rateintotxtdiv'>
                    <h1 className='rateintotxt'>{country}</h1>
                </div>
                <img src={require('../images/logocrop1.png') }  className="ratingsimg"></img>
                <div className='rateintotxtdiv1'>
                    <h1 className='rateintotxt1'>{Rating}</h1>
                </div>
                
            </div>
            
        </div>
    )
};

const fullCard = CardData.map((carddata) => {
    return(
        <div className='fullcard'>
            <TopCardDiv
                key={carddata.id}
                img = {carddata.image}
                badgeText = {carddata.availability}
            />
            <BtmCardDiv
                key={carddata.id1}
                itemName = {carddata.itemName}
                storeLocation = {carddata.storeLocation}
                country = {carddata.country}
                Rating = {carddata.Rating}
            />
        </div>
    )
})

function TopRated(){
    const leftscrollbtn = <button id="slideLeft" type="button" className='leftbtn'>
        <img className='scrollimg' src={require('../images/arrowleft.png') } />
    </button>
    const rightscrollbtn =  <button id="slideRight" type="button" className='rightbtn'> 
        <img className='scrollimg' src={require('../images/arrowright.png') } />
    </button>
    let buttonRight
    let buttonLeft
    window.onload = function(){    
         buttonRight = document.getElementById('slideRight');
         buttonLeft = document.getElementById('slideLeft');
         buttonRight.onclick = function () {
        document.getElementById('container').scrollLeft += 900;
          };
        buttonLeft.onclick = function () {  
            document.getElementById('container').scrollLeft -= 900;
            };
    };
    
    
    
    return(
        <div className='Highlyratedscroldiv'>
            {leftscrollbtn}
            <div className='myborder'>
                <div className='Highlyrateddiv' id='container'>
                    {fullCard}   
                </div>  
            </div>
            {rightscrollbtn}
        </div>
    
    )

}



export default function Card(){
    return(
        <TopRated />
    )
};