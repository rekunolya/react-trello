import React from 'react';
import css from './style.module.css'
import { Input } from 'components/common/Input/Input';
import { Button } from 'components/common/Button/Button';

export class LoginPage extends React.Component {
    
    state = {
        values: { login: '', password: '' },
        errors: { login: '', password: '' },
    }

    changeInput = ({target}) => {
        this.setState((prevState) => ({
          values:
          { ...prevState.values, [target.name] : target.value}
        }));
        
        
      }
        
    
    signIn = () => {
        const {login, password} = this.state.values 
        const sign = "student"
        const pswrd = "password"
     
        if (login == sign && password == pswrd) {
                alert ("Success")
              }
              else if (login !== sign || password !==pswrd ) {
                alert ("Error")
              }
    }

 
    render() {
        const {login, password} = this.state.values
        return (
            <form className = {css.form} onChange = {this.changeInput}>
                
                
               Login  <Input name = "login" placeholder = "Input Login" isVisible = {true} type = "text" value = {login}/>
               {console.log(login)}
               <br/>
                
               Password <Input name = "password" placeholder = "Input Password"  isVisible = {true} type = "password" value = {password}/> 
               {console.log(password)}
                <br/>
                <Button title = "sign in" onClick = {this.signIn}/>
            </form>
        )
    }
}