import React from 'react'
import css from './styles.module.css'

export function Input (props) {
  
    return(
        <div>
        <input
        value = {props.value}
        onChange = {props.onChange}
        placeholder = {props.placeholder}
        className = {props.className}
        onBlur = {props.onBlur}
        type = {props.type}
        name = {props.name}/>
        {props.errorMessage && <p className = {css.error}>{props.errorMessage}</p>}
        </div>
        )
   
}