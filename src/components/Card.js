import React from 'react';
import '../index.css';


function TopCardDiv(){
    return(
        <div className='itmimgdiv'>
            <img className='itmimg' src={require('../images/itemimg2.jpg') } />
            
        </div>
    )
};

function BtmCardDiv(){
    return(
        <div className='btmcarddiv'>
            
            <div className='rateinfo'>
                <h1 className='rateintotxt'>50k</h1>
                <img src={require('../images/logocrop1.png') }  className="ratingsimg"></img>
                <h1 className='rateintotxt1'>USA</h1>
            </div>
            
        </div>
    )
};

function CardItems(){
    return(
        <div className='Hrateddiv'>
            <TopCardDiv/>
            <BtmCardDiv/>
        </div>
    )
};

export default function Card(){
    return(
        <CardItems />
    )
};