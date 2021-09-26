import css from './styles.module.css'

export function Card ({title, children, footer}) {
    return (
        <div className = {css.card}>
            <div className = {css.title}>{title}</div>
            <div>{children}</div>
            <div>{footer}</div>
        </div>
    )
}