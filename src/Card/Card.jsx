import { Input } from 'components/common'
import css from './styles.module.css'

export function Card ({title, children, footer}) {
    return (
        <div class={css.card}>
            <div class={css.title}>{title}</div>
            <div class={css.cardList}>
                <div class="textarea">
                </div>
            </div>
            
                {footer}

        </div>
    )
}