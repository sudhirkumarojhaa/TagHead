import React,{useState} from 'react';
import Loader from '../components/Loader';
import { UserAuth } from '../context/AuthContext';
import logo from '../assets/logo.jpeg';
import NewGoal from './NewGoal';
import ReviewProgress from './ReviewQuotes';
import ReviewQuotes from './ReviewQuotes';

const Dashboard = () => {
  const { user,logOut } = UserAuth();
  const [level,setLevel]=useState(0);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const goToScreen=(id)=>{
    setLevel(id)
  }

  return (
        user.displayName ? 
        <div className='mainContent px-2'>
           <div className='d-flex justify-content-between align-items-center'>
            <img src={logo} alt="logo" className='logo' onClick={()=> window.location.reload()}/>
            <button className='btn btn-dark btn-sm' onClick={handleSignOut}>Logout</button>
          </div>
          {level === 0 ?
          <>
          <div className='container p-2 mt-5 col-lg-8 vh-75 d-flex flex-column'>
            <h6>Welcome <b>{user.displayName}</b></h6> 
            <h3 className='mt-3'>
              TagHead’s mission is to provide a platform to meditate and soothe your senses easily. We make sure that we serve the best experience to the user interacting with the platform.
            </h3>
            <p>In order to start your onboarding process, you can start by tapping on the button below. We are excited to get feedback from everyone, and will make a special effort to hear from underrepresented groups in technology.</p>
            <div className='d-flex mt-4'>
              <button className='btn btn-primary btn-sm' onClick={()=>goToScreen(1)}>Get Started</button>
              <button className='btn btn-dark btn-sm mx-3' onClick={()=> goToScreen(2)}>Review Quotes</button>
            </div>
          </div>
          </> : null}
          {level === 1 ? <NewGoal/> : level ===2 ? <ReviewQuotes/> :null}
          
        </div>: <Loader/>  
  );
};

export default Dashboard;