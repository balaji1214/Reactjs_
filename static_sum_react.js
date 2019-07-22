//index.js code 
import React from 'react';
import ReactDOM from 'react-dom';
import _2nd from './HelloReact';
ReactDOM.render(<_2nd/>,document.getElementById('root'))

//HelloReact.js //Component
import React from 'react';
import ReactDOM  from 'react-dom';
class _2nd extends React.Component
{
    render()
    {
        return(
            <h1>{2+2}</h1>
        )
    }
}
export default _2nd;
