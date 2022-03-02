import React from 'react';
import '../index.css';
import Card from './Card';



export default function TopRated(){
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
                    <Card/>   
                </div>  
            </div>
            {rightscrollbtn}
        </div>
    
    )

}