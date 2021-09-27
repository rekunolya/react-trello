import { Button } from '../components/common/Button'
import css from './styles.module.css'

export const Modal = ({title, text}) => {
    return (
        <div className = {css.modal}>
        <div className = {css.title}>{title}</div>
        <div className = {css.text}>{text}</div>
        <div className = {css.footer}>
                <Button title = "Yes"/>
                <Button title = "Cancel"/>
        </div>
       
        </div>
   )
}