import React from 'react';
import logo from '../../public/logo/logo.jpg'


const Recipes = () => {
    return (
        <div className='bg-slate-900'>
        <section className='md:grid grid grid-cols-2 grip-5 text-white'>
        <img className='w-3/4 mt-5' src={logo} alt="" />
        <div className='mt-5'>
            <h2 className='text-4xl font-bold '>Name: Kunal Kapur </h2>
            <p className='mt-3'>Bio: Kunal Kapur (born 18 September 1979) is an Indian chef and restaurateur known for hosting and judging MasterChef India.
            <br />
            Career: In January 2008, he was rated as "The Best Indian Chef" in New Delhi by India Today[citation needed], and he was titled as "The Next Big Guy in Kebabs and Curries in India".[citation needed] He was given an opportunity to present Satvik cuisine to Prime Minister Narendra Modi and German Chancellor Angela Merkel in Bangalore.[2] He also cooked for 42 first ladies on the India Africa Summit besides an interactive cooking session with them during their recent visit to India.[3]</p>
            <p>Recipes: 10</p>

       <p>Experience: 10 years</p>
       <p>Likes: 250k</p>
          </div>
          </section>
          <section className='text-white text-center text-2xl mt-2 py-5 '>

        <h2 className='text-3xl'>
        Ingredients: <span>
        8 oz mushrooms,
        2 tbsp butter,
        1 onion,
        2 cloves garlic,
        3 tbsp flour,
        3 cups milk,
        2 cups chicken or vegetable broth,
         1 tsp salt,
        1/4 tsp black pepper,
        1 tsp thyme,
        1/2 cup heavy cream
        </span>
       
        </h2>
          
          </section>
          
            
        </div>
    );
};

export default Recipes;