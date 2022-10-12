import { useState } from 'react';
import ReactPlayer from 'react-player'
import {GoUnmute, GoMute} from 'react-icons/go'

import './intro.scss'
function Intro() {
    const [isMute, setIsMute] = useState(false)
    return (  
        <div className='intro'>
            <ReactPlayer 
                playing={true}
                width="100%"
                height='100%'
                volume={1}
                muted={isMute}
                url="https://www.youtube.com/watch?v=o_xLMZq-UrQ"
                className='video__intro'
            />
            <div className='info'>
                <h1>My Movies App</h1>
                <p>My Movies will bring you moments of comfort and relaxation</p>
            </div>
           
                {
                    isMute ? 
                    <GoMute className='btn' onClick={() => setIsMute(!isMute)}/> : 
                    <GoUnmute className='btn' onClick={() => setIsMute(!isMute)}/>
                }
            
            <div className='fadeBottom' ></div>
        </div>
    );
}

export default Intro;