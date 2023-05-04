import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Providers/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.config';
import { FaGoogle } from 'react-icons/fa';



const Login = () => {
    const { signIn} = useContext(AuthContext);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);

        signIn(email,password)
        .then(result =>{
            const signUser = result.user;
            console.log(signUser);
        })
        .catch(error =>{
            console.log(error)
        })

    }

    const handleGoogleSignIn = () =>{
      signInWithPopup(auth,provider)
      .then()
      .catch()
    }

   

    return (
    
   <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex-col">
    <div className="text-center  ">
      <h1 className="text-5xl font-bold">Please Login now!</h1>
 
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body bg-teal-300	">
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
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to="/register" className="label-text-alt link link-hover">Create Account?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
        <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleSignIn} className="btn btn-warning"> <FaGoogle /> <span className='ms-3'>Google Login</span></button>
      
    </div>
     </div>
    </div>
    
    );
};

export default Login;
