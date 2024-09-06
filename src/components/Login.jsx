import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser,logout } from '../features/auth/authSlice';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error ,token } = useSelector(state => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(credentials));
  };


  const handleLogout = (e) => {
    
    dispatch(logout());
  };

  if(token === null) return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <input 
          type="text" 
          placeholder="Username" 
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 mb-4"
        />
        <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Login</button>
      </form>
      {error && <div>{error}</div>}
    </div>
  );
  return (

        
          <button type="logout" disabled={loading} className="max-w-40 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300" onClick={handleLogout}>Logout</button>
     
    
  );
};

export default Login;
