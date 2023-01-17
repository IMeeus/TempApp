import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUsers } from '../services/ReqresService';

const Users = () => {
    let { id } = useParams();
    const [state, setState] = useState({
        loading: false,
        data: null
    });

    useEffect(() => {
        setState((prev, props) => {
            return { loading: true }
        });

        const fetchData = async () => {
            var data = await getUsers(id);
            setState((prev, props) => {
                return { loading: false, data: data }
            });
        };

        fetchData();
    }, [id]);

    const renderRows = () => state.data.map(user => {
        return (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td><img src={user.avatar}/></td>
            </tr>
        )
    });

    return (
        <>
            <h1>Users {id}</h1>

            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>first_name</th>
                        <th>last_name</th>
                        <th>avatar</th>
                    </tr>

                </thead>
                <tbody>
                    {state.data && renderRows()}
                </tbody>
            </table>
        </>
    )
}

export default Users;