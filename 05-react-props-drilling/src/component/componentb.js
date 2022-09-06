import React from "react";
import ComponentC from "./componentc";

let ComponentB = (props) => {
    return(
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-warning text-white">
                    <p className="h4">Component B</p>
                    <small>{JSON.stringify(props.userInfo)}</small>
                    <ComponentC userInfo={props.userInfo}/>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ComponentB;
