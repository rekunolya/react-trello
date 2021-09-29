import React from 'react'
import css from './styles.module.css'

export class Date extends React.Component {
    state = {
        value: ""
    }
    changeValue = (event) => {
        this.setState({value: event.target.value})
    }

  render () {
      return (
          <div>
              <input type = "date" 
              className = {css.date}
              value = {this.state.value}
              onChange = {this.changeValue}
              />
          </div>
      )
  }
}