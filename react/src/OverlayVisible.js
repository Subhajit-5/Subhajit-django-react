import React from 'react'
class OverlayVisible extends React.Component {
  constructor(props){
    super(props);
    this.state={
        value:this.props.data
    }
  }

  renderTableData() {
    return this.state.value.map((value, index) => {
       const { id,start_time, end_time } = value 
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{start_time} : {end_time}</td>
          </tr>
       )
    })
 }

 render() {
    return (
       <div>
          <h5 id='title'>Activity Records</h5>
          <table id='value'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }
}
export default OverlayVisible