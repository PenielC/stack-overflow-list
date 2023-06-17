import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../store/reducers/rootReducer';
import { getUsersList } from '../../store/actions/getUsersList';
import UsersListTable from '../../components/tables/usersListTable';
import CircularLoader from '../../components/shared/circularLoader';
import './home.css';

const Home = () => {
    const users: any = useSelector((state: ApplicationState) => state.usersList );
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () =>{
        //using an any here because I don't want to type dispatch
        dispatch<any>(getUsersList());
    }  

    const usersListTable = <UsersListTable users={users?.usersList} />;

return (<div className='container'>
    <h1>Home</h1>
        <div className='tableContainer'>
           {(users as {loading: boolean}).loading ? CircularLoader() :  usersListTable}
        </div>
       
    </div>);
};
export default Home;