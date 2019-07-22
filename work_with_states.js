//index.js
import React from 'react';
import ReactDOM from 'react-dom';
import _state from './App';
ReactDOM.render(<_state/>,document.body)

//App.js
import React from 'react';
import ReactDOM from 'react-dom';
class _state extends React.Component
{
  state={name:''};
  render()
  {
    return(
     
     <p>{this.state.name+'sai'}</p>

    );
  }
}
export default _state;
