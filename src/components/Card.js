import React from 'react';
import '../index.css';


function TopCardDiv(){
    return(
        <div className='itmimgdiv'>
             <a href='#'>
                <img className='itmimg' src={require('../images/itemimg2.jpg') } />
             </a>
            
            
        </div>
    )
};

function BtmCardDiv(){
    return(
        <div className='btmcarddiv'>
            <div className='itemnameandlocationdiv'>
               
                <div className='itemname'>
                    <img className='itemnameimg' src={require('../images/restaurant1.png') } />
                    <a href='#' className='itemnametxt'>Pizza-Hut (Pepperoni Pizza)</a>
                </div>
                <div className='itemlocation'>
                <img className='itemnameimg' src={require('../images/mapicon.png') } />
                    <a href='#' className='itemnametxt'>1101 W Jackson, IL 60607</a>
                </div>

            </div>
            <div className='rateinfo'>
                <div className='rateintotxtdiv'>
                    <h1 className='rateintotxt'>USA</h1>
                </div>
                <img src={require('../images/logocrop1.png') }  className="ratingsimg"></img>
                <div className='rateintotxtdiv1'>
                    <h1 className='rateintotxt1'>5k+</h1>
                </div>
                
            </div>
            
        </div>
    )
};
function FullCard(){
    return(
        <div className='fullcard'>
            <TopCardDiv/>
            <BtmCardDiv/>
        </div>
    )
}

function CardItems(){
    return(
        <div className='Hrateddiv'>
            <FullCard/>
        </div>
    )
};

export default function Card(){
    return(
        <CardItems />
    )
};