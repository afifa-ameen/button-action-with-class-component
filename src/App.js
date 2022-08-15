import React, {Component} from "react";
import './App.css';

class App extends Component{
  state = {
    showMessage: false
  };
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };


render(){
  return(
    <>
      <div id="main">
        <button id="click" onClick={this.onButtonClickHandler}>Button</button> 
        {this.state.showMessage && <p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      </div>
    </>
  )
}

}

export default App;
