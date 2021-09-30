import React from 'react'
import css from './styles.module.css'

export function Input ({value, onChange, placeholder, className}) {
    return(
        <input
        value = {value}
        onChange = {onChange}
        placeholder = {placeholder}
        className = {className}/>
        )
   
}