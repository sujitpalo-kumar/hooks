import React, {useState} from "react";

let ChangeSelectBox = () => {
    let [option , setOption] = useState('');
    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header bg-primary text-white">
                                <p className="h4">Change Select Box</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <form>
                                            <div className="form-group">
                                                <select onChange={(e) => setOption(e.target.value)} className="form-control" >
                                                    <option value="">Select an Option</option>
                                                    <option value="React JS">React JS</option>
                                                    <option value="Angular">Angular</option>
                                                    <option value="Vue JS">Vue JS</option>
                                                    <option value="Ionic">Ionic</option>
                                                    <option value="Flutter">Flutter</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col">
                                        <p className="h4">{option}</p>
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
export default ChangeSelectBox;
