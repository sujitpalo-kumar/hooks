import React, { useState } from 'react';
import './App.css';
import ClientCard from './component/clientcard';
import ParentCard from './component/parentcard';
import ServerCard from './component/servercard';






let App = () => {
    let [clientMessage , setClientMessage] = useState('');
    let [serverMessage , setServerMessage] = useState('');
    
    let receiveFromClient = (value) => {
        setClientMessage(value);
    };

    let receiveFromServer = (value) => {
        setServerMessage(value);
    };

    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with Component Interaction</a>
           </nav>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-5">
                        <ClientCard serverMessage={serverMessage} sendToApp={receiveFromClient}/>
                    </div>
                    <div className="col-md-2"/>
                    <div className="col-md-5">
                        <ServerCard clientMessage={clientMessage} sendToApp={receiveFromServer}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// class App extends React.Component {


//     render() {
//         return (
//             <div className="App">
//                 <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
//                     <a href="/" className='navbar-brand'>React Examples</a>
//                 </nav>
//                    <ParentCard/>

//             </div>
//         );
//     }

// }
export default App;
