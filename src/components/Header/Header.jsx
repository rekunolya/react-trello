import css from './styles.module.css'

export function Header () {
    return (
        <div className = {css.wrapper}>
            <div><a href = "https://trello.com/">Trello</a></div>
            <div>menu</div>
        </div>
    )
}