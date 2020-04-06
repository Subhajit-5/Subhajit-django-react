import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
// import Login from './Login';
import Register from './Register';
import Login from './Login'


const style = {
    margin: 15,
  };


class Loginscreen extends Component{

    constructor(props){
        super(props);
        this.state={
          username:'',
          password:'',
          loginscreen:[],
          loginmessage:'',
          buttonLabel:'Register',
          isLogin:true
        }
      }

      handleClick(event){
        // console.log("event",event);
        var loginmessage;
        var loginscreen=[];
        if(this.state.isLogin){
            loginscreen=[]
          loginscreen=[];
          loginscreen.push(<Register parentContext={this} />);
          loginmessage = "Already registered.Go to Login";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Login",
                         isLogin:false
                         
                       })
        }
        else{
          console.log('first tym login ----')
          loginscreen=[];
          loginscreen.push(<Login parentContext={this}/>);
          loginmessage = "Not Registered yet.Go to registration";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Register",
                         isLogin:true
                       })
        }
        console.log(this)
      }
  



      componentWillMount(){
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
                      loginscreen:loginscreen,
                      loginmessage:loginmessage
                        })
      }

      render() {
          console.log(12)
          console.log(this)
          console.log(this.state)
        return (
          <div className="loginscreen">
            {this.state.loginscreen}
            <div>
              {this.state.loginmessage}
              <MuiThemeProvider>
                <div>
                   <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
               </div>
              </MuiThemeProvider>
            </div>
          </div>
        );
      }
}
export default Loginscreen