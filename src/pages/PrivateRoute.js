// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { getToken } from 'redux/tokenSlice/tokenSlice';

function PrivateRoute({ children }) {
  // const isLogin = useSelector(getToken);
  const isLogin = true;
  return isLogin ? (
    children
  ) : (
    <h2>
      Please <Link to="/login">LogIn</Link>
    </h2>
  );
}

export default PrivateRoute;
