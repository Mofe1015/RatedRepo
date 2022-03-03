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
                key = {talksdata.id}
                img = {talksdata.image}
            />
        </div>
    )
})

function TalksTotal(){
    

    function goLeft () {
        document.getElementById('talksContainer').scrollLeft -= 900;
    };
    function goRight () {  
        document.getElementById('talksContainer').scrollLeft += 900;
    };
         

    return(
        <div className='talkstotal'>
            <button onClick={goLeft} type="button" className='talksleftbtn'>
                <img className='scrollimg' src={require('../images/arrowleft.png') } />
            </button>
            <button onClick={goRight} type="button" className='talksrightbtn'> 
                <img className='scrollimg' src={require('../images/arrowright.png') } />
            </button>
            <div className='changingtalks' id='talksContainer'>
                {AllTalks}
            </div>
        </div>
    )
};

export default function Talks(){
    return(
        <TalksTotal/>
    )
};
