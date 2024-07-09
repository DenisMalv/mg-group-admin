// import { useSelector } from 'react-redux';
// import { getToken } from 'redux/tokenSlice/tokenSlice';
// import { Link} from 'react-router-dom';

import { ThreeDots } from "react-loader-spinner";
import UserEditForm from "components/UserEditForm/UserEditForm";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "redux/usersAPI/usersAPI";







const UsersEditPage = () => {
  const {id} = useParams()
  const {data,isLoading,isError} = useGetUserByIdQuery(id)

  // console.log(data)

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
                />}
     {isError && <h1>ErrorAPI !!! on UserEditPage</h1>}
     {data && 
        <UserEditForm userData={data.user} roles={''}/>
     }
    </>
  );
};

export default UsersEditPage;
