import React from 'react';
import logo from '../../public/logo/logo.jpg'

const Recipes = () => {
    return (
        <div>
        <div className='md:grid grid grid-cols-2 grip-5'>
        <img className='w-3/4 mt-5' src={logo} alt="" />
        <div className='mt-5'>
            <h2 className='text-4xl font-bold'>Name: Kunal Kapur </h2>
            <p className='mt-3'>Bio: Kunal Kapur (born 18 September 1979) is an Indian chef and restaurateur known for hosting and judging MasterChef India.
            <br />
            Career: In January 2008, he was rated as "The Best Indian Chef" in New Delhi by India Today[citation needed], and he was titled as "The Next Big Guy in Kebabs and Curries in India".[citation needed] He was given an opportunity to present Satvik cuisine to Prime Minister Narendra Modi and German Chancellor Angela Merkel in Bangalore.[2] He also cooked for 42 first ladies on the India Africa Summit besides an interactive cooking session with them during their recent visit to India.[3]</p>
            <p>Recipes: 10</p>

       <p>Experience: 10 years</p>
       <p>Likes: 250k</p>
          
        </div>

        </div>
            
        </div>
    );
};

export default Recipes;