import React from 'react'
import './Levels.css'
import Player from './LevelComponents/Player'
import LevelsForm from './LevelComponents/LevelsForm'
import {API} from "../Main/constants";

class Levels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streams: []
        }
        this.reload = this.reload.bind(this);
    }

    componentDidMount() {
        this.getLivestreams();
    }

    reload() {
        this.getLivestreams();
        window.location.reload();
    }

    getLivestreams() {
        let endpoint = API + '/LevelFeature/get-livestreams/'
        let data = {
            method: 'GET',
        }

        fetch(endpoint, data)
            .then(response => response.json())
            .then(response => {
                this.setState({
                    streams: [response]
                })
                console.log(this.state.streams);
            }).catch(error => {console.log(error)})
    }

    render() {
        return (
            <div>
                <LevelsForm reload={this.reload}/>
                <div className="levels-container">
                    {this.state.streams.map(stream => {
                        return(
                            stream.map(video => {
                                const {id, url} = video;
                                return (
                                    <Player key={id} id={id} url={url} />
                                )
                            })
                        )
                    })}
                </div>
            </div>
        );
    }

}

export default Levels;