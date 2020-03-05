
import React, { Component } from 'react';
import ColorPanel from '../Container/colorPanel';
import SizePanel from '../Container/sizePanel';
import TextPannel from '../Container/textPanel';

 class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {}
  }
 
  render() {
    
    return (
      <header className="App-header container">
   
         <div className="container ">
            <div className="row">
               <ColorPanel/>
               <SizePanel/>
            </div>
           <TextPannel/>
            
         </div>
       
          
         
          
      
         
          
          
     </header>
    )
  }
}


export default App;
