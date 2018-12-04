import React, {Component} from 'react';
import Button from './Button/button'
import'./App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Button text="Submit"/>
            </div>
        );
    }
}

export default App;