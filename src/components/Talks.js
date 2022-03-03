import React from 'react';
import '../index.css';
import TalksData from './TalksData';



function TalksScrollInfo(props){
    return(
        <div>
            <img className='talksimg' src={props.img} />
        </div>
    )
}

const AllTalks = TalksData.map((talksdata) => {
    return(
        <div>
            <TalksScrollInfo
                img = {talksdata.image}
            />
        </div>
    )
})

function ChangingTalks(){
    return(
        <div className='changingtalks'>
           {AllTalks}
        </div>
    )
    
};

function TalksTotal(){
    const leftscrollbtn = <button id="talksslideLeft" type="button" className='talksleftbtn'>
        <img className='scrollimg' src={require('../images/arrowleft.png') } />
    </button>
    const rightscrollbtn =  <button id="talksslideRight" type="button" className='talksrightbtn'> 
        <img className='scrollimg' src={require('../images/arrowright.png') } />
    </button>

    return(
        <div className='talkstotal'>
            {leftscrollbtn}
            {rightscrollbtn}
            <ChangingTalks/>
        </div>
    )
};

export default function Talks(){
    return(
        <TalksTotal/>
    )
};
