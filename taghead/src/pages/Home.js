import React,{useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/logo.jpeg'

const Home = () => {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/dashboard');
    }
  }, [user]);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
      <img src={logo} alt="logo" className='logo'/>
      <h4>Welcome to TagHead</h4>
      <Link onClick={handleGoogleSignIn}>
        <button className='btn btn-dark btn-sm mt-3'>Sign in with Google</button>
      </Link>
    </div>
  )
}

export default Home