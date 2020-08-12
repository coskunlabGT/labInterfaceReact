import React from 'react'
import './Levels.css'
import ReactPlayer from 'react-player';
import CurrentReading from './LevelComponents/CurrentReading'

function Levels() {
    return (
        <div>
            <CurrentReading/>
            <div className="container">
                <iframe
                        title="Cam 1"
                        type="text/html"
                        frameBorder="0"
                        width='26%'
                        height='60%'
                        src="//video.nest.com/embedded/live/MepFwxGlxr?autoplay=1"
                        allowFullScreen>
                </iframe>
                <iframe
                        title="3D Printer Cam"
                        type="text/html"
                        frameBorder="0"
                        width='26%'
                        height='60%'
                        src="//video.nest.com/embedded/live/UawlptLNv8?autoplay=1"
                        allowFullScreen>
                </iframe>
                <ReactPlayer
                    url = 'https://www.youtube.com/watch?v=9Auq9mYxFEE&list=PLU12uITxBEPHofmeOxlMA5zh11Nl1iB1E&index=7&t=0s'
                    className='right-player'
                    playing
                    volume={0}
                    width='26%'
                    height='60%'
                    controls={true}
                />
            </div>
        </div>
    );
}

export default Levels;