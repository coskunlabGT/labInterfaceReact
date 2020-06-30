import React, { Component } from 'react'

class CurrentReading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            reading: []
        };
    }

    componentDidMount() {
        //this.getLatestReading()
        this.timerId = setInterval(() => this.getLatestReading(), 10000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId)
    }

    getLatestReading() {
        fetch("http://127.0.0.1:8000/get_latest/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        reading: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, reading} = this.state;

        if (error) {
            return <div className={'device-update'}>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div className={'device-update'}>Loading...</div>;
        } else {
            const rvalue = JSON.stringify(this.state.reading, ['reading_value']);

            return (
                <div>
                    <p className={'device-update'}> Current Reading: {rvalue.substring(18, rvalue.length - 2)}</p>
                </div>
            );
        }
    }
}

export default CurrentReading;