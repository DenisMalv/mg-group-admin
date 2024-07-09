// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
// import { Link} from 'react-router-dom';

import List from "components/List/List";
import ListItemUsers from "components/ListItemUsers/ListItemUsers";
import { ThreeDots } from "react-loader-spinner";

import { useNavigate } from "react-router-dom";
import { useGetUsersQuery } from "redux/usersAPI/usersAPI";



const UsersPage = () => {

  const {data,isLoading,isError} = useGetUsersQuery()
  const navigate = useNavigate()

 
  const handleEditUser = (id) =>{
    navigate(`/users/${id}`)
  }
  return (
    <>
     {/* Users page       */}
     {isLoading && <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass={`loader-overlay ${isLoading ? 'loader-overlay-show' : ''}`}
                />
      }
     {isError && <h1>ErrorAPI !!! on UserPage</h1>}
     {data && 
        <List>
          {data.map(({_id,name,email,role,lastLogined,verify,})=> 
            <ListItemUsers key={_id}  id={_id} name={name} email={email} role={role} verify={verify} lastLogined={lastLogined} handleClick={handleEditUser}/> )}
        </List>
     }
    </>
  );
};

export default UsersPage;
