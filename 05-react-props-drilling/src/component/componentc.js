import React from "react";

let ComponentC = (props) => {
    return(
        <React.Fragment>
            <div className="card m-3">
                <div className="card-body bg-danger text-white">
                    <p className="h4">Component C</p>
                    <small>{JSON.stringify(props.userInfo)}</small>
                </div>
            </div>
        </React.Fragment>
    );
};
export default ComponentC;
