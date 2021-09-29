import { Button } from '../components/common/Button'
import css from './styles.module.css'
import React from 'react'

export class Modal extends React.Component{
render () {
    const {title, children, isVisible} = this.props;
    if (!isVisible) {
        return null
    }

    return (
        <div className = {css.modal}>
        <div className = {css.title}>{title}</div>
        {children}
        <div className = {css.footer}>
                <Button title = "Yes"/>
                <Button title = "Cancel"/>
        </div>
       
        </div>
   )
}
}