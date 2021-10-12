import { Button, Input } from '../components/common'
import { Date } from '../components/common/Date'
import React from 'react'
import css from './styles.module.css'



export class Bigcard extends React.Component {

    render () {
        const {isVisible} = this.props;
        if (!isVisible) {
        return null;
        }

    return (
        <div className={css.wrapper}>
        <div className={css.bigcard}>
                <div className={css.bigcardHeader}>
                    <div className={css.bigcardHeaderRight}>
                        <textarea className={css.bigcardHeaderName}>Наименование новой карты</textarea>
                        <div className={css.bigcardHeaderStstus}>колонка нахождения
                            <span className={css.bigcardHeaderStstusSpan}>статус</span>
                            <span className="icn__btneye"></span>
                        </div>
                    </div>
                    <div className={css.bigcardHeadeLeft}>
                        <Button className = {css.close} title = "X"/>
                    </div>
                </div>
                <div className={css.bigcardWrapper}>
                    <div className={css.bigcardInfo}>
                        <div className={css.cardInfoContainer}>
                            <div className={css.cardInfoContainerUsers}>
                                <div className={css.cardInfoContainerUsersTitle}>УЧАСТНИКИ</div>
                                <div className={css.cardInfoContainerUsersIcons}></div>
                            </div>
                            <div className={css.cardInfoContainerTerm}>
                                <div className={css.cardInfoContainerTermTitle}>СРОК</div>
                                <div className={css.cardInfoContainerTermWrapper}>
                                    <div className={css.cardInfoContainerTermInput}><input type="checkbox" className="user-content"/></div>
                                    <div className={css.cardInfoContainerTermBtn}>
                                        <Date className = {css.cardInfoContainerTermBtn}/>
                                        <span className={css.containerTermBtnStatus}>статус</span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={css.cardInfoDescription}>
                            <div className={css.cardInfoDescriptionWrapper}>
                                <div className={css.cardInfoDescriptionTitle}>
                                    <span></span>
                                    Описание задачи
                                </div>
                                <div className={css.cardInfoDescriptionBtn}></div>
                            </div>
    
                            <Input placeholder = "Введите описание задачи!" className= {css.inputDescription}/>
                            
                        </div>
                        <div className={css.cardInfoActions}>
                            <div className={css.cardInfoActionsWrapper}>
                                <div className={css.cardInfoActionsTitle}>
                                    <span></span>
                                    Комментарий
                                </div>
                                <div className={css.cardInfoActionsBtn}></div>
                            </div>
                            
                                <Input placeholder = "Напишите комментарий..."/>
                           
                        </div>
                    </div>
                    <div className={css.bigcardCreate}>
                        <div className={css.bigcardCreateWrapper}>
                            <ul className={css.cardCreate}>
                                <div className={css.cardCreateTitle}>ДОБАВИТЬ НА КАРТОЧКУ</div>
                                <li className={css.cardCreateButton}>
                                    <Button title = "Участники" class = {css.cardCreateButton} icon = {"icn__btnuser"}/>
                                </li>
                                <li className={css.cardCreateButton}>
                                    <Button title = "Дата" class = {css.cardCreateButton} icon = {"icn__btnclock"}/>
                                </li>
                            </ul>
                            <ul className={css.cardCreate}>
                                <div className={css.cardCreateTitle}>ДЕЙСТВИЯ</div>
                                <li className = {css.cardCreateButton}>
                                    <Button class = {css.cardCreateButton} icon = {"icn__btnarrow-right2"} title = "Перемещение"/>
                                </li>
                                <li className = {css.cardCreateButton}>
                                    <Button class = {css.cardCreateButton} icon = {"icn__btnvideo_label"}title = "Архивация"/>
                                </li>
                            </ul>
                            <ul className={css.cardCreate}>
                            <li className={css.cardCreateButton}>
                                <Button class = {css.cardCreateButton} icon = {"icn__btnattachment"} title = "Сохранить"/>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
    }
}