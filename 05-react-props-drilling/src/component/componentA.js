import React from "react";
import ComponentB from "./componentb";

let ComponentA = (props) => {
    return(
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-primary text-white">
                    <p className="h4">Component A</p>
                    <small>{JSON.stringify(props.userInfo)}</small>
                    <ComponentB userInfo={props.userInfo}/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ComponentA;
