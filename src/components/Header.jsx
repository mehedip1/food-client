import React from 'react';
import { Link } from 'react-router-dom';
import Register from './Register';

const Header = () => {
    return (
    
    <>
     <section className='md:grid lg:mt-2 text-white font-bold bg-slate-900'>
    <div1 className='grid grid-cols-2 py-3'>
     <h1 className='text-5xl ms-5 text-bold'>Appetite</h1>
            <div className='px-2 flex justify-between items-center'>
            <div>
            <Link className='px-5' to='/'>Home</Link>
           <Link className='px-2' to='/blog'>Blog</Link>
            <Link className='px-5' to='/about'>About</Link>
            <Link className='px-5' to='/login'>Login</Link>
            <Link className='px-5' to='/register'>Register</Link>
            </div>
         
          
        
             
        
            </div>
            
    
    
           
           
           
        
          
        
             
           </div1>
           </section>
           </>
      

    );
};

export default Header;