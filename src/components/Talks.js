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

    var numberOfTimes = TalksData.length;
    let delay = 10000;
    let myTimeout

    function automaticScroll(){
        
        for (let i = 0; i < numberOfTimes; i++) {
            myTimeout=setTimeout( goRightAutomatic, delay * i);
            console.log(1)
        }
    }
    automaticScroll()
    function goRightAutomatic () {  
        
        document.getElementById('talksContainer').scrollLeft += (800);
        if ((document.getElementById('talksContainer').offsetWidth +  document.getElementById('talksContainer').scrollLeft) >= 800*numberOfTimes){
            document.getElementById('talksContainer').scrollLeft -= 800*numberOfTimes;
            var timeoutID = setTimeout(function(){automaticScroll()}, delay);
        }

    };
    function goLeft () {
        document.getElementById('talksContainer').scrollLeft -= 800;
        
    };
    function goRight () {  
        document.getElementById('talksContainer').scrollLeft += 800;
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
