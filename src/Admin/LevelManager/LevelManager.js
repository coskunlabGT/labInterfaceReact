import React from "react";
import {Link, withRouter} from "react-router-dom";
import LevelForm from "../../Levels/LevelComponents/LevelForm";
import Player from "../../Levels/LevelComponents/Player";
import {API} from "../../Main/constants"

class LevelManager extends React.Component {
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
            }).catch(error => {console.log(error)})
    }

    render() {
        return (
            <div>
                <div className = "admin-buttons">
                    <Link to = "/admin/inventory">Inventory</Link>
                    <Link to = "/admin/users">Users</Link>
                    <Link to = "/admin/levels">Levels</Link>
                </div>
                <LevelForm reload={this.reload}/>
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
        )
    }
}

export default withRouter(LevelManager)