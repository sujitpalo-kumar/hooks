import React, { useState } from 'react';
import './App.css';
import ComponentA from './component/componentA';


let App = () => {
    let [userInfo , setUserInfo] = useState({
        author : 'NAVEEN SAGGAM',
        channel : 'UiBrains Technologies'
    });

    return(
        <React.Fragment>
           <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
               <a href="/" className="navbar-brand">React Hooks with Props Drilling & Context API</a>
           </nav>

           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-body bg-dark text-white">
                               <p className="h4">App Component</p>
                               <small>{JSON.stringify(userInfo)}</small>
                               <ComponentA userInfo={userInfo}/>
                           </div>
                       </div>
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
//                    <ComponentA/>

//             </div>
//         );
//     }

// }
export default App;
