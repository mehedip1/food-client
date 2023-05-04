import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';



const Register = () => {
    const {createUser} = useContext(AuthContext);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [error, setError]= useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = event =>{
        event.preventDefault();
        setSuccess('')
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name,photo,email,password);


        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            event.target.reset();
            setError('');
             setSuccess('user successfully create')
        })
        .catch(error =>{
          console.log(error.message)
            setError(error.message);
        })

    }
    const handleGoogleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then()
      .catch()
    }





    return (


        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Please Register</h1>
     
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input type="photo" name='photo' placeholder="photo url" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name='password' placeholder="password" className="input input-bordered" required />
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">Already account?Please Login</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button onClick={handleGoogleSignIn} className="btn btn-warning">Google Login</button>
          <br />
          <p className='text-white bg-red-400'>{error}</p>
          
        </div>
         </div>
        </div>
    );
};

export default Register;