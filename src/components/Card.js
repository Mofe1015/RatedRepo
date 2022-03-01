import React from 'react';
import '../index.css';
import TopCardImg from'../images/itemimg2.jpg';
import TopCardImg1 from'../images/itemimg1.jpg';
import TopCardImg2 from'../images/restaurant1.png';


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
    return(
        <div className='Hrateddiv'>
            <div className='fullcard'>
                <TopCardDiv
                    img = {TopCardImg}
                />
                <BtmCardDiv
                    itemName = "Pizza-Hut (Pepperoni Pizza)"
                    storeLocation = "1101 W Jackson, IL 60607"
                    country = "USA"
                    Rating = "5k+"
                />
            </div>

            <div className='fullcard'>
                <TopCardDiv
                    img = {TopCardImg2}
                />
                <BtmCardDiv
                    itemName = "Burger-place (beef burger)"
                    storeLocation = "23rd N paulista, SC 5220"
                    country = "BR"
                    Rating = "12k+"
                />
            </div>

        </div>  
    )
}



export default function Card(){
    return(
        <FullCard />
    )
};