import React from 'react';
import { useRouteError } from 'react-router-dom';
import { FaRegGrinTears } from 'react-icons/fa';

const Error = () => {
    const error = useRouteError();
    console.error(error);
    return (
        <div className='text-center text-white bottom-10 mt-5 py-5 bg-slate-900' id="error-page">
      
        <h1 className='text-5xl text-white text-center'>404</h1>
        <h1 className='text-3xl'> Oops!</h1>
        
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <span className='mx-5 ms-5 text-center align-middle items-center'><FaRegGrinTears /></span>
      </div>
    );
};

export default Error;