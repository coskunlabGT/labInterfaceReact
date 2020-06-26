import React, { Component } from 'react'

class EditableText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: 'Notes'
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({notes: event.target.value});
    }

    render () {
        return <form>
            <textarea
                rows={3}
                cols={29}
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Notes"
            />
        </form>
    }
}

export default EditableText;
