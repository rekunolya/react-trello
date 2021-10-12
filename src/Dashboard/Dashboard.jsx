import { Input, Button } from 'components/common'
import React from 'react'
import {Card} from '../Card'
import css from './styles.module.css'

export class Dashboard extends React.Component {
    state = {
        value: "",
        todos: [],
        isVisible: false,
    }
    changeInput = (ev) => {
        this.setState({value: ev.target.value});
      };
    
      changesInList = () => {
        return (
          this.setState((prevState) => ({
    todos: [
      ...prevState.todos, 
      {text: prevState.value, id: prevState.todos.length + 1}
    ],
    value: "",
    isVisible: false,

          }))
    
        )
      }

    addInput = () => { 
        return this.setState({ isVisible: true });
      };

    cancel =() => { 
        return this.setState({ isVisible: false });
      };

    render() {
        return (
            <div className = {css.wrapper}>
            <Card title = "todo"
    
           footer = {
                <div className = {css.footer}>
                    <Button title = "Добавить" onClick = {this.addInput}/>
                    <Button title = "Отмена" onClick = {this.cancel}/>
    
                </div>
                }
            > 
              
                <div>
                <ul>
                     {this.state.todos.map((item) => {
                         return <li key={item.id} >
                             <textarea className={css.task}>
                                 {item.text}
                             </textarea>
                             </li>;
                         })
                     }
                </ul>
            {this.state.isVisible && <Input 
            value = {this.state.value}
            isVisible = {this.state.isVisible}
            onChange = {this.changeInput}
            placeholder = "input task"
            onBlur = {this.changesInList}/>}
            </div>
            </Card>
            <Card title = "in process"/>
            <Card title = "done"/>
            </div>
        )
    }

}