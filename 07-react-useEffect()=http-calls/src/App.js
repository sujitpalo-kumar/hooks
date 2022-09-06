import React from 'react';
import './App.css';
import DigitalWatch from './component/digitalwatch';
import UserList from './component/userlist';



let App = () => {

    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with LifeCycle & useEffect()</a>
           </nav>

           <UserList/>
           <DigitalWatch/>
        </React.Fragment>
    );
};


export default App;
