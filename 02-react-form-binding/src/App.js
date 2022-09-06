import React from 'react';
import './App.css';
import ChangeSelectBox from './component/changeselectbox';
import ChangeUsername from './component/changeusername';
import LoginForm from './component/loginform';
import Registration from './component/registration';


class App extends React.Component {


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>
                  {/* <ChangeSelectBox/>
                  <ChangeUsername/>
                  <LoginForm/> */}
                  <Registration/>



            </div>
        );
    }

}
export default App;
