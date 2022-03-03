import React from 'react';
import '../index.css';



function ChangingTalks(){
    return(
        <div className='changingtalks'>

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
