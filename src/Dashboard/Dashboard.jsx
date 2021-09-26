import {Card} from '../Card'
import { Button } from '../components/common/Button'
import css from './styles.module.css'

export function Dashboard() {
    return (
        <div className = {css.wrapper}>
        <Card title = "todo" 
        footer = {
            <div className = {css.footer}>
                <Button title = "Добавить"/>
                <Button title = "Отмена"/>

            </div>
        }/>
        <Card title = "in process"/>
        <Card title = "done"/>
        </div>
    )
}