import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import OverlayVisible from './OverlayVisible.js'
import axios from 'axios';
import { List } from 'antd';
import Login from './Login'

const style = {
    margin: 15,
  };


class Records extends Component {
  constructor(props){
    super(props);
    this.state={
        loginscreen:'',
        loginmessage:'',
        buttonLabel:false,
        isLogin:'',
    }
  }
  handleClick(event){
    var apiBaseUrl = "http://127.0.0.1:8000/api/";
    //var self = this;
    console.log(this.props.id.appContext.state.userid)
    console.log(this)
    var payload={
            "userid":this.props.id.appContext.state.userid,
            }
    axios.put(apiBaseUrl+'login', payload)
   .then(response => {
     console.log(response);
     
     if(response.data.status === 1){
       console.log('Logout successful')
       var loginscreen=[];
         var loginmessage="Not Registered yet.Go to registration";
         loginscreen.push(<Login parentContext={this}/>)
         this.setState({
            loginscreen:loginscreen,
            loginmessage:loginmessage,
            buttonLabel:"Login",
            isLogin:false
        })
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
            <div>
            <RaisedButton label="Logout" primary={true} style={style} onClick={(event) => this.handleClick(event)}/> 
                   
            <List
            itemLayout="vertical"
            size="large"
            pagination={{
            onChange: page => {
            console.log(page);
            },
            pageSize: 3,
            }}
            
            dataSource={this.props.data}
            renderItem={item =>(  
                <List.Item>
                    <List.Item.Meta
                    title={<a href={item.href}>{item.firstname} {item.lastname}</a>}
                    description={item.email}
                    />
                    <OverlayVisible
                    data={item.activity_period}/>
                </List.Item>
            )}
        />,
        <br/>
        </div>
        </MuiThemeProvider>

        </div>
        );
  }
}



export default Records;