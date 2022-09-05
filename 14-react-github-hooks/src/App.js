import React from 'react';
import './App.css';

import GithubSearchApp from './component/GithubSearchApp';

class App extends React.Component {


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>

                <GithubSearchApp/>
            </div>
        );
    }

}
export default App;
