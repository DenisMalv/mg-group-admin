// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
// import { Link} from 'react-router-dom';

import UserEditForm from "components/UserEditForm/UserEditForm";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "redux/usersAPI/usersAPI";





const UsersEditPage = () => {
  const {id} = useParams()
  const {data,isLoading,isError} = useGetUserByIdQuery(id)

  console.log(data)

  return (
    <>
     {/* Users page       */}
     {isLoading && <h1>LoadingAPI !!!</h1>}
     {isError && <h1>ErrorAPI !!!</h1>}
     {data && 
        <UserEditForm userData={data.user} roles={''}/>
     }
    </>
  );
};

export default UsersEditPage;
