import React, { Component } from 'react'
import './Levels.css'
import ReactPlayer from 'react-player';
import CurrentReading from './LevelComponents/CurrentReading'
import EditableText from './LevelComponents/EditableText'

function Levels() {
    return (
        <div>
            <CurrentReading/>
            <div className="container">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=LvfaMv9nbJc&list=PLIFqWCuxNyoj8HAwNYOlqdDL52pNsbvKV&index=21&t=0s'
                    playing
                    volume={0}
                    width='26%'
                    height='60%'
                    controls={true}
                />
                <EditableText/>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=DDU-rZs-Ic4'
                    className='mid-player'
                    playing
                    volume={0}
                    width='26%'
                    height='60%'
                    controls={true}
                />
                <EditableText/>
                <ReactPlayer
                    url = 'https://www.youtube.com/watch?v=9Auq9mYxFEE&list=PLU12uITxBEPHofmeOxlMA5zh11Nl1iB1E&index=7&t=0s'
                    className='right-player'
                    playing
                    volume={0}
                    width='26%'
                    height='60%'
                    controls={true}
                />
                <EditableText/>
            </div>
        </div>
    );
}

export default Levels;