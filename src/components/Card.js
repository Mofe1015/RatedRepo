import React from 'react';
import '../index.css';
import CardData from './CardData';

function TopCardDiv({img}){
    return(
        <div className='itmimgdiv'>
             <a href='#'>
                <img className='itmimg' src={img} />
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
function FullCard(){
    const cardElerment = CardData.map((carddata) => {
        return(
            <div className='fullcard'>
                <TopCardDiv
                    img = {carddata.image}
                />
                <BtmCardDiv
                    itemName = {carddata.itemName}
                    storeLocation = {carddata.storeLocation}
                    country = {carddata.country}
                    Rating = {carddata.Rating}
                />
            </div>
        )
    })
    return(
        <div className='Highlyrateddiv'>
            {cardElerment}   
        </div>  
    )
}



export default function Card(){
    return(
        <FullCard />
    )
};