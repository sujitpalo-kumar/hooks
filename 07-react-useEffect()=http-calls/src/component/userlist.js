import React, {useEffect, useState} from "react";
import Axios from "axios";

let UserList = () => {
    let [users , setUsers] = useState([]);

    useEffect(() => {
        console.log('Fetching Data from Server');
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
            setUsers(response.data);
        }).catch((err) => {
            console.error(err);
        });
    }, []);

    return(
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-primary">Users Information</p>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, corporis deserunt dicta dolore hic ipsa iure laborum maiores mollitia necessitatibus nobis, odio omnis quae quas quasi quisquam reiciendis sapiente temporibus?</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-primary table-hover text-center table-striped">
                            <thead className="bg-primary text-white">
                            <tr>
                                <th>ID</th>
                                <th>NAME</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>ADDRESS</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                users.length > 0 ? <React.Fragment>
                                    {
                                        users.map((user) => {
                                            return(
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.username}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.address.city}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </React.Fragment> : null
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
};
export default UserList;
