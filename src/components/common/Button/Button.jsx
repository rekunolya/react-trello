import css from './styles.module.css'

export function Button (props) {
    return (
        <button 
        onClick = {props.onClick} 
        className = {css.button + " " + props.icon}>
            {props.title}
        </button>
    )
}