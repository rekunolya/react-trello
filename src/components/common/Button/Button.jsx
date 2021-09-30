import css from './styles.module.css'

export function Button ({onClick, title, icon}) {
    return (
        <button onClick className = {css.button + " " + icon}>
            {title}
        </button>
    )
}