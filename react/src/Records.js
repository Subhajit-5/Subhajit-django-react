import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import OverlayVisible from './OverlayVisible.js'
import axios from 'axios';
import { List } from 'antd';

import Loginscreen from './Loginscreen'

const style = {
    margin: 15,
  };


class Records extends Component {
  constructor(props){
    super(props);
    this.state={
        loginPage:[],
        uploadScreen:[]
      }
    }
  handleClick(event){
    //var apiBaseUrl = "http://127.0.0.1:8000/api/";
    var apiBaseUrl = "https://django-react-activityapp.herokuapp.com/api/";
    var self = this;
    var payload={
            "userid":this.props.id.appContext.state.userid,
            }
    axios.put(apiBaseUrl+'login', payload)
   .then(response => {
     console.log(response);
     
     if(response.data.status === 1){
         console.log('Logout Successful')
       alert("Logout successful");
        var loginPage=[]
        console.log(self)
        console.log(self.props.id.appContext)
        console.log(self.props.id.appContext.loginPage)
        loginPage.push(<Loginscreen parentContext={self.props.id.appContext}/>)
        self.props.id.appContext.setState({
            loginPage:loginPage,
            uploadScreen:[]
              })
      console.log('after change of state')
      console.log(self)  
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