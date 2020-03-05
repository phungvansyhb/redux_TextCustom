import React, { Component } from 'react'
import { connect } from 'react-redux'

class TextPannel extends Component {
    render() {
        return (
            <div className="panel panel-danger">
                <div className="panel-heading">
                  <h3 className="panel-title">Text</h3>
                </div>
                <div className="panel-body">
                  
                  <div style = { { color : this.props.color.color , fontSize : this.props.size.defaultSize+"px"  } }>  Hom nay troi mua ca ngay </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    size: state.size,
    color:state.color
  }
}
export default connect(mapStateToProps)(TextPannel)