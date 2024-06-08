// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
// import { Link} from 'react-router-dom';

import List from "components/List/List";
import ListItemUsers from "components/ListItemUsers/ListItemUsers";
import { useGetUsersQuery } from "redux/usersAPI/usersAPI";



const UsersEditPage = () => {

  const {data,isLoading,isError} = useGetUsersQuery()

  console.log(data)

  return (
    <>
     {/* Users page       */}
     {isLoading && <h1>LoadingAPI !!!</h1>}
     {isError && <h1>ErrorAPI !!!</h1>}
     {data && 
        <List>
          {data.map(({_id,name,email,role,lastLogined,verify,})=> 
            <ListItemUsers key={_id}  id={_id} name={name} email={email} role={role} verify={verify} lastLogined={lastLogined}/> )}
        </List>
     }
    </>
  );
};

export default UsersEditPage;
