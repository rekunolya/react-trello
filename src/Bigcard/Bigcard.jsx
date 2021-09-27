import { Button } from '../components/common/Button'
import { Date } from '../components/common/Date'
import { Input } from '../components/common/Input'
import css from './styles.module.css'

export function Bigcard ({title}) {
    return (
        <div className = {css.newcard}>
            <div className = {css.header}>
                <div>{title}</div>
                <div>
                    <Button title = "X"/>
                </div>
            </div>
            <div className = {css.cardbody}>
                <div className = {css.cardbodyleft}>
                    <div>
                        <div>
                            <Date />
                        </div>
                    </div>
                    <div className = {css.discription}>
                        <div className = {css.discriptiontitle}>Описание задачи</div>
                        <div className = {css.discriptiontext}> 
                        <textarea placeholder = "Введите описание задачи"></textarea>
                        </div>
                    </div>
                    <div className = {css.comment}>
                        <div className = {css.commenttitle}>Комментарий</div>
                        <div className = {css.commenttext}> 
                        <Input placeholder = "Напишите комментарий..."/>
                        </div>
                    </div>
                </div>
                <div className = {css.cardbodyright}>
                    <div>Добавить на карточку</div>
                    <div>
                        <Button title = "Участники"/>
                        <Button title = "Дата"/>
                    </div>
                    <div> Действия </div>
                    <div>
                        <Button title = "Перемещение"/>
                        <Button title = "Архивация"/>
                        <Button title = "Сохранить"/>
                    </div>
                </div>
            </div>
        </div>
    )
}