import React from 'react'
import {API} from '../../Main/constants'

class Player extends React.Component {
    constructor(props) {
        super(props)
        this.handleExit = this.handleExit.bind(this);
    }

    handleExit() {
        const endpoint = API + '/LevelFeature/delete-livestream/' + this.props.id + '/'
        const data = {
            method: 'DELETE',
        }

        fetch(endpoint, data)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)})

        window.location.reload();
    }

    render() {
        return (
            <div className='player-container'>
                <iframe
                    className='livestream'
                    frameBorder="0"
                    src={this.props.url}
                    allowFullScreen>
                </iframe>
                <button className="exit-btn" onClick={this.handleExit}>x</button>
            </div>
        );
    }
}

export default Player;