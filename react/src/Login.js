import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import React from 'react'
import './style.css'
import axios from 'axios'
import UploadScreen from './UploadScreen.js'

const style = {
    margin:45,
   };
class Login extends React.Component {
   constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
    }
  }
  
  handleClick(event){
    var self = this;
    //var apiBaseUrl = "http://127.0.0.1:8000/api/";
    var apiBaseUrl = "https://django-react-activityapp.herokuapp.com/api/";
    var payload={
      "username":this.state.username,
	    "password":this.state.password,
    }
    axios.post(apiBaseUrl+'login', payload)
   .then(function (response) {
     console.log(response.data);
     if(response.data.status === 1){
       var uploadScreen=[];
       uploadScreen.push(<UploadScreen appContext={self.props.appContext} />)
       self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen,userid:response.data.id},)

     }
     else{
       console.log("Username does not exists");
       alert("Username does not exist");
     }
   })
   .catch(function (error) {
     console.log(error);
   });
  }

render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className='blue-square-container'>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
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
export default Login;