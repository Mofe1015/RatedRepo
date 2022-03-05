import React from 'react';
import '../index.css';
import TalksData from './TalksData';
import RecommendData from './RecommendData';


function TalksScrollInfo(props){
    return(
        <div>
            <img className='talksimg' src={props.img} />
            <div className='topratedinfo'>
                <h1 className='talkstoptexttype'>{props.type}</h1>
                <p className='topratedname'></p>
            </div>
        </div>
    )
}

const AllTalks = TalksData.map((talksdata) => {
    return(
        <div>
            <TalksScrollInfo
                key = {talksdata.id}
                img = {talksdata.image}
                name = {talksdata.name}
                type = {talksdata.type}
            />
        </div>
    )
});

function ReccomdationCont(props){
    return(
        <div className='recomendationcont'>
            <div className='recommendimgdiv'>
                <img className='reco-img' src={props.img} />
            </div>
            <div className='recommend-details'>
                <div className='recommend-type'>
                    
                </div>
                <div className='other-recommend-details'>

                </div>

            </div>
        </div>
    )
};
const Reccomdation = RecommendData.map((recommenddata) => {
    return(
        <ReccomdationCont
            key = {recommenddata.id}
            img = {recommenddata.image}
        />
    )
});

function TalksTotal(){

    var numberOfTimes = TalksData.length;
    let delay = 10000;
    let myTimeout

    function automaticScroll(){
        
        for (let i = 0; i < numberOfTimes; i++) {
            myTimeout=setTimeout( goRightAutomatic, delay * i);
        }
    }
    automaticScroll()
    function goRightAutomatic () {  
        
        document.getElementById('talksContainer').scrollLeft += (800);
        if ((document.getElementById('talksContainer').offsetWidth +  document.getElementById('talksContainer').scrollLeft) >= 800*numberOfTimes){
            document.getElementById('talksContainer').scrollLeft -= 800*numberOfTimes;
            setTimeout(function(){automaticScroll()}, delay);
        }

    };
    function goLeft () {
        document.getElementById('talksContainer').scrollLeft -= 800;
        
    };
    function goRight () {  
        document.getElementById('talksContainer').scrollLeft += 800;
    };
    function MouseOver(event) {
        console.log("over")
      };
    function MouseOut(event){
        event.target.style.background="";
    };
    

    

    return(
        <div className='talkstotal'>
            <h1 className='talkstoptext'>Top Rated:</h1>

            <button onClick={goLeft} type="button" className='talksleftbtn'>
                <img className='scrollimg' src={require('../images/arrowleft.png') } />
            </button>

            <button onClick={goRight} type="button" className='talksrightbtn'> 
                <img className='scrollimg' src={require('../images/arrowright.png') } />
            </button>

            <div onMouseOver={MouseOver} onMouseOut={MouseOut} className='changingtalks' id='talksContainer'>
                {AllTalks}
            </div>
            
            <div className='recomendations'>
                <h1 className='talkstoptext1'>Recommended For This Week</h1>
                {Reccomdation}
            </div>
        </div>
    )
};

export default function Talks(){
    return(
        <TalksTotal/>
    )
};
