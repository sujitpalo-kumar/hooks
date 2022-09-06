import React, {useState} from "react";

let HobbySelectorCheck = () => {
    let [hobby, setHobby] = useState({
        eating : false,
        coding : false,
        sleeping : false
    });

    // updateInput
    let updateInput = (e) => {
        setHobby({
            ...hobby,
            [e.target.name] : e.target.checked
        });
    };

    return(
        <React.Fragment>
           {/* <pre>{JSON.stringify(hobby)}</pre>*/}
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Hobby Selector</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-check">
                                            <input
                                                name="eating"
                                                onChange={updateInput}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck1"/>
                                            <label className="form-check-label" htmlFor="defaultCheck1">
                                                Eating
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="coding"
                                                onChange={updateInput}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck2"/>
                                            <label className="form-check-label" htmlFor="defaultCheck2">
                                                Coding
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                name="sleeping"
                                                onChange={updateInput}
                                                className="form-check-input" type="checkbox"
                                                id="defaultCheck3"/>
                                            <label className="form-check-label" htmlFor="defaultCheck3">
                                                Sleeping
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        {
                                            hobby.eating ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-success text-white">
                                                            <p className="h4">Eating</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobby.coding ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-warning text-white">
                                                            <p className="h4">Coding</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                        {
                                            hobby.sleeping ?
                                                <React.Fragment>
                                                    <div className="card animated jello">
                                                        <div className="card-body bg-danger text-white">
                                                            <p className="h4">Sleeping</p>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                                        </div>
                                                    </div>
                                                </React.Fragment> : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default HobbySelectorCheck;
