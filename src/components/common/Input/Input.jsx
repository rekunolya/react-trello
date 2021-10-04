import React from 'react'
import css from './styles.module.css'

export function Input (props) {
    return(
        <input
        value = {props.value}
        onChange = {props.onChange}
        placeholder = {props.placeholder}
        className = {props.className}
        onBlur = {props.onBlur}/>
        )
   
}