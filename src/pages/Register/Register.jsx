import React, { useContext } from 'react';
import NavBar from '../shared/NavBar/NavBar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
      e.preventDefault() ;
      const form = new FormData(e.currentTarget) ;
      const name = form.get('name')
      const email = form.get('email')
      const password = form.get('password')
      const photo = form.get('photo')

      // create user 
      createUser(email, password)
      .then(res => console.log(res))

      .catch(error => console.log(error))

      
    }


    return (
        <div>
            <NavBar></NavBar>
           <h2 className='text-3xl text-center'>Please Register</h2> 


           <form onSubmit={handleRegister} className="mx-auto card-body lg:w-1/2 md:w-3/4">
        
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input placeholder="Photo" name='photo' className="input input-bordered" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email'className="input input-bordered" required />
        </div>



        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password"name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>


        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>

      </form>

      
      <p className='text-xl font-bold text-center mt-2'> Already have an account? go to  <Link to="/login" className='text-blue-600'>Login</Link> </p>


        </div>
    );
};

export default Register;