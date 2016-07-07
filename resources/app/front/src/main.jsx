import React from 'react'
import ReactDOM from 'react-dom'
import text from './foo'
const App = React.createClass({
    render(){
        return (
            <div className="frontBeers">
                <h1>{text()}</h1>
            </div>
        )
    }
})
const myApp = (<App></App>)
ReactDOM.render(myApp, document.getElementById('app'));