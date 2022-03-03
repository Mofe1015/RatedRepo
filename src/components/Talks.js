import React from 'react';
import '../index.css';



function ChangingTalks(){
    const leftscrollbtn = <button id="slideLeft" type="button" className='talksleftbtn'>
        <img className='scrollimg' src={require('../images/arrowleft.png') } />
    </button>
    const rightscrollbtn =  <button id="slideRight" type="button" className='talksrightbtn'> 
        <img className='scrollimg' src={require('../images/arrowright.png') } />
    </button>

    return(
        <div className='changingtalks'>
           {leftscrollbtn}
           {rightscrollbtn}

        </div>
    )
    
};

function TalksTotal(){
    return(
        <div className='talkstotal'>
            <ChangingTalks/>
        </div>
    )
};

export default function Talks(){
    return(
        <TalksTotal/>
    )
};
