import React, { useContext } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const location = useLocation() ;
    const navigate = useNavigate()
    console.log('location in login page', location)

    const handleLogin = e => {
        e.preventDefault() ;
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        
        signInUser(email,password)
        .then(res => {
          console.log(res.user)
          //navigate 
          navigate(location?.state  ? location.state : '/' )
        })
        .catch(error => console.log(error))
    }



    return (
        <div>
            <NavBar></NavBar>
           <h2 className='text-3xl text-center'>Please Login</h2> 

           <form onSubmit={handleLogin} className="mx-auto card-body lg:w-1/2 md:w-3/4">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className='text-xl font-bold text-center mt-2'> Dont have an account  <Link to="/register" className='text-blue-600'> Register</Link> </p>


        </div>
    );
};

export default Login;<h2>Login</h2>