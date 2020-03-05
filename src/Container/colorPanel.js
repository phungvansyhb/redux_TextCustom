import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getColor} from '../Actions/color-action'

class ColorPanel extends Component {
     GetColor = (e) => {
        //console.log(e.target.textContent) 
        this.props.getColor(e.target.textContent)
     }

    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                      
            <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Select color</h3>
                </div>
                <div className="panel-body">
                  
                  <button type="button" className="btn btn-danger" ref="butt" onClick={ (e) => this.GetColor(e)}>red</button>
                  
                  <button type="button" className="btn btn-primary" ref = "butt" onClick={ (e) => this.GetColor(e)}>blue</button>
                  
                  <button type="button" className="btn btn-success" ref="butt" onClick={ (e) => this.GetColor(e)}>green</button>
                  
                  
                  
                </div>
            </div>
        </div>
    
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  return {
    color: state.color
  }
}
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators( { getColor : getColor }, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(ColorPanel)