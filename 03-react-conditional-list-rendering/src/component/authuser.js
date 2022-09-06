import React, {useState} from "react";

let AuthUser = () => {
    let [auth , setAuth] = useState({
        message : '',
        isLoggedIn : false
    });

    let login = () => {
        setAuth({
            message : 'Welcome! User',
            isLoggedIn: true
        });
    };

    let logout = () => {
        setAuth({
            message : 'Thank You! User',
            isLoggedIn: false
        });
    };

    return(
        <React.Fragment>
           <div className="container mt-3">
               <div className="row">
                   <div className="col">
                       <div className="card">
                           <div className="card-body">
                               {
                                   !auth.isLoggedIn &&
                                   <button onClick={login} className="btn btn-success btn-sm">Login</button>
                               }
                               {
                                   auth.isLoggedIn &&
                                   <button onClick={logout} className="btn btn-danger btn-sm">LogOut</button>
                               }
                            <p className="h3">
                                {auth.message}
                            </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default AuthUser;
