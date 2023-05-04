import React from 'react';
import chef from '../../public/logo/chef.jfif'

const Slider = () => {
    return (
        <div>
            <section className='md:grid grid-cols-2 gap-5 text-white'>
            <img className='mt-3' src={chef} alt="" />
            <div>
              <h2 className='text-center text-3xl mt-5'>Food Recipes</h2>
              <p className='text-1xl text-center'>One chilly day soon, put a big pot of this easy-going 15 Bean Soup on your stove to simmer away. Pull on your slippers, putter about while the wind blows outside, and enjoy the tantalizing build-up of warm, cozy smells wafting from your kitchen. It’s a snug, contented picture, and it ends the way many happy stories do: a delicious, deeply satisfying meal.</p>
            </div>
    
            </section>
        </div>
    );
};

export default Slider;