import React, { Component } from 'react'

export default class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    onChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const { setUser } = this.props;
        const { text } = this.state;
        if (text.trim() === '') return;
        else setUser(text);
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' name='text' value={this.state.text} onChange={this.onChange} placeholder='Enter a username' />
                <input type='submit' value='Search' />
            </form>
        )
    }
}
