import css from './styles.module.css'

export function Button ({onClick, title}) {
    return (
        <button onClick className = {css.button}>
            {title}
        </button>
    )
}