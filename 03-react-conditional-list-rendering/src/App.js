import React from 'react';
import './App.css';
import AuthUser from './component/authuser';
import CustomerList from './component/customerlist';
import EmployeeList from './component/employeelist';
import HobbySelectorRadio from './component/hobbyselectorRadio';
import HobbySelectorCheck from './component/hobbyselestorcheck';



class App extends React.Component {


    render() {
        return (
            <div className="App">
                <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
                    <a href="/" className='navbar-brand'>React Examples</a>
                </nav>
                    {/* <AuthUser/>
                    <CustomerList/> */}
                    {/* <EmployeeList/> */}
                    <HobbySelectorCheck/>
                    <HobbySelectorRadio/>

            </div>
        );
    }

}
export default App;
