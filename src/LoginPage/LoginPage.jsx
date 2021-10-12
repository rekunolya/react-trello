import React from 'react';
import css from './style.module.css'
import { Input, Button } from 'components/common';


export class LoginPage extends React.Component {
    state = {
      values: { login: "", password: "" },
      errors: { login: "", password: "" },
      isVisible: true
    };
  
    changeInput = ({ target }) => {
      this.setState((prevState) => ({
        values: { ...prevState.values, [target.name]: target.value },
        errors: {...prevState.errors, [target.name]: ""}
      }));
    };
  
    signIn = () => {
      const { login, password } = this.state.values;
      const sign = "student";
      const pswrd = "password";
  
      if (login === sign && password === pswrd) {
        alert("Success!");
        return;
      }
      this.setState({
        errors: {
          login: login !== sign ? "Uncorrect login" : "",
          password: password !== pswrd ? "Uncorrect password" : ""
        }
      });
      
    };
  
    render() {
      const {
        values: { login, password },
        errors: { login: errorLogin, password: errorPassword }
      } = this.state;
  
      return (
        <form className={css.form}>
          Login
          <Input
            name="login"
            type="text"
            value={login}
            errorMessage={errorLogin}
            onChange = {this.changeInput}
          />
          Password
          <Input
            name="password" 
            type="password"
            value={password}
            errorMessage={errorPassword}
            onChange = {this.changeInput}
          />
             
          <Button type = "button" title="sign in" onClick={this.signIn} />
        </form>
      );
    }
  }
  