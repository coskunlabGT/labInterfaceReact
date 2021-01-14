import React from 'react'
import './Levels.css'
import {API} from "../Main/constants";

class Levels extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            streams: []
        }
    }

    componentDidMount() {
        this.getLivestreams();
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
                <div className="levels-container">
                    {this.state.streams.map(stream => {
                        return(
                            stream.map(video => {
                                const {id, url} = video;
                                return (
                                    <div className='player-container'>
                                        <iframe
                                            key={id}
                                            className='livestream'
                                            frameBorder="0"
                                            src={url}
                                            allowFullScreen>
                                        </iframe>
                                    </div>
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