import {Card} from '../Card'
import css from './styles.module.css'

export function Dashboard() {
    return (
        <div className = {css.wrapper}>
        <Card title = "todo"/>
        <Card title = "in process"/>
        <Card title = "done"/>
        </div>
    )
}