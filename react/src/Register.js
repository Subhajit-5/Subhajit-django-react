import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import Login from './Login'
import './style.css'

const style = {
    margin: 15,
  };

class Register extends Component {

    handleClick(event){
        //var apiBaseUrl = "http://127.0.0.1:8000/api/";
        var apiBaseUrl = "https://django-react-activityapp.herokuapp.com/api/";
        console.log("values",this.state.first_name,this.state.last_name,this.state.email,this.state.password);
        //To be done:check for empty values before hitting submit
        var self = this;
        var payload={
        "first_name": this.state.first_name,
        "last_name":this.state.last_name,
        "username":this.state.username,
        "password":this.state.password,
        'email':this.state.email
        }
        console.log(payload)
        axios.post(apiBaseUrl+'register', payload)
       .then(function (response) {
         console.log(response);
         if(response.data.status === 1){
          //  console.log("registration successfull");
          console.log('abcd')
          console.log(self)
          
           var loginscreen=[];
           loginscreen.push(<Login parentContext={self.props.parentContext} appContext={self.props.parentContext.props.parentContext}/>);
           var loginmessage = "Not Registered yet.Go to registration";
           self.props.parentContext.setState({loginscreen:loginscreen,
           loginmessage:loginmessage,
           buttonLabel:"Register",
           isLogin:true
            });
         }
       })
       .catch(function (error) {
         console.log(error);
       });
      }
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      username:'',
      email:'',
      password:''
    }
  }
  render() {
    return (
      <div className='blue-square-container'>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange={(event,newValue) => this.setState({first_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange={(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange={(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="User Name"
             onChange={(event,newValue) => this.setState({username:newValue})}
             />
           <br/>
           <TextField
             type="password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange={(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
export default Register;