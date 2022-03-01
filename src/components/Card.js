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

function BtmCardDiv(props){
    return(
        <div className='btmcarddiv'>
            <div className='itemnameandlocationdiv'>
               
                <div className='itemname'>
                    <img className='itemnameimg' src={require('../images/restaurant1.png') } />
                    <a href='#' className='itemnametxt'>{props.itemName}</a>
                </div>
                <div className='itemlocation'>
                <img className='itemnameimg' src={require(props.img) } />
                    <a href='#' className='itemnametxt'>{props.storeLocation}</a>
                </div>

            </div>
            <div className='rateinfo'>
                <div className='rateintotxtdiv'>
                    <h1 className='rateintotxt'>{props.country}</h1>
                </div>
                <img src={require('../images/logocrop1.png') }  className="ratingsimg"></img>
                <div className='rateintotxtdiv1'>
                    <h1 className='rateintotxt1'>props.rateinfo</h1>
                </div>
                
            </div>
            
        </div>
    )
};
function FullCard(){
    return(
        <div className='fullcard'>
            <TopCardDiv
                img = "../images/mapicon.png "
            />
            <BtmCardDiv
                itemName = "Pizza-Hut (Pepperoni Pizza)"
                storeLocation = "1101 W Jackson, IL 60607"
                country = "USA"
                Rating = "5k+"
            />
                
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