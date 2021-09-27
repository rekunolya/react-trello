import React from 'react'
import css from './styles.module.css'

export class Input extends React.Component {
    state = {
        value: ""
    }
    changeInput = (event) => {
        this.setState({value: event.target.value})
    }

    render() {
        return(
            <div>
                <label>
                    <input
                    value = {this.state.value}
                    onChange = {this.changeInput}
                    />
                </label>
            </div>
        )
    }
}