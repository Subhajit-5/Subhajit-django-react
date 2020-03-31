
import React from 'react'
import Records from './Records.js'
import axios from 'axios';
import CustomLayout from './Layout.js'
import 'antd/dist/antd.css'; 
class UploadScreen extends React.Component{
  constructor(props){
      super(props);
      this.state={
        details:[]
      }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/api/login')
        .then(res=>{
          this.setState({
            details:res.data
          });
          console.log(res.data)
          //console.log(this.props.appContext.state.userid)
        })
    }
    render(){
        return(
          <div>
            <CustomLayout>
              <Records
                data={this.state.details.result}
                id={this.props}
              />
            </CustomLayout>
            
          </div>
        )
    }
}
export default UploadScreen