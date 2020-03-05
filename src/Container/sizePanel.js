import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {decreaseSize} from '../Actions/size-action'
import {increaseSize} from '../Actions/size-action'

 class SizePanel extends Component {
     GetText = (e) => {
        (e.target.textContent === "Tang") ? this.props.increaseSize() : this.props.decreaseSize();
        if( this.props.size.defaultSize === this.props.size.minSize){    
             
          document.getElementById('b-decrease').classList.add('disabled') 
        }else{
          document.getElementById('b-decrease').classList.remove('disabled') 
        }

        if(this.props.size.defaultSize === this.props.size.maxSize){
          
          document.getElementById('b-increase').classList.add('disabled')
        }else{
          document.getElementById('b-increase').classList.remove('disabled') 
        }
     }
   
    render() {
        console.log(  this.props.size.defaultSize)
        return (
            
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      
            <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Chon size</h3>
                </div>
                <div className="panel-body">
                  
                  <button type="button" id="b-increase" className="btn btn-success " onClick ={(e) => this.GetText(e)}>Tang</button>
               
                  
                  <button type="button" id ="b-decrease" className="btn btn-danger" onClick ={(e) => this.GetText(e)}>Giam</button>
                  
                </div>
            </div>
            
          </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    size: state.size
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({decreaseSize : decreaseSize , increaseSize : increaseSize} , dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(SizePanel)