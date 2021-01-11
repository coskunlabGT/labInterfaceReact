import React from 'react';
import {API} from '../../Main/constants'

class LevelsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
        this.urlInput = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const endpoint = API + '/LevelFeature/add-livestream/'
        const data = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(this.state)
        }

        fetch(endpoint, data)
            .then(response => {console.log(response)})
            .catch(error => {console.log(error)})

        this.setState({url: ''});
        this.props.reload();
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    render() {
        return (
            <div>
                <form className='url-form' onSubmit={this.handleSubmit}>
                    <input type="text"
                           placeholder="Enter link"
                           onChange={this.handleChange}
                           value={this.state.url}
                           ref={this.urlInput}/>
                    <button className='go-btn' type="submit" value="submit">Go!</button>
                </form>
            </div>
        );
    }
}

export default LevelsForm;