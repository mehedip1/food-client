import React from 'react';
import { FaHandPointRight } from 'react-icons/fa';
import masroom from '../../public/logo/masroom.jpg'



const Card = () => {

    return (
        <div>
          <h2 className='mt-5 text-3xl text-white text-center'>Food Recipes</h2>
                <section className='flex'>


                <div className="card w-96 hover:bg-gray-300 shadow-xl mt-3">
    
        <figure className="px-10 pt-10">
    <img src={masroom} alt="Shoes" className="rounded-xl" />
        </figure>
       <div className="card-body items-center text-center">
    <h2 className="card-title">Mushroom Recipe</h2>
    <p>Ingredients: <small>1.1 cup sliced King Oyster Mushroom <br />

                        2.Trumpet Royale mushroom growing kit
                         King Oyster Mushrooms

                         3.1 medium onion – inch pieces

                         4.3 celery stalks – one inch pieces

                          5.King Oyster Mushroom Serving Styles 
                          King Oyster Mushroom Serving Styles

                         6.1 large carrot – 3/4 inch pieces 

                           7.1/2 cup green pepper – one inch pieces

                          </small> </p>
             <div className="card-actions">
         <button className="btn btn-info"> <FaHandPointRight /> Like</button>
            </div>
          </div>
                </div>
                <div>
                <div className="card w-96 hover:bg-gray-300 shadow-xl mt-3">
    
    <figure className="px-10 pt-10">
<img src={masroom} alt="Shoes" className="rounded-xl" />
    </figure>
   <div className="card-body items-center text-center">
<h2 className="card-title">Mushroom Recipe</h2>
<p>Ingredients: <small>1.1 cup sliced King Oyster Mushroom <br />

                    2.Trumpet Royale mushroom growing kit
                     King Oyster Mushrooms

                     3.1 medium onion – inch pieces

                     4.3 celery stalks – one inch pieces

                      5.King Oyster Mushroom Serving Styles 
                      King Oyster Mushroom Serving Styles

                     6.1 large carrot – 3/4 inch pieces 

                       7.1/2 cup green pepper – one inch pieces

                      </small> </p>
         <div className="card-actions">
         <button className="btn btn-info"> <FaHandPointRight /> Like</button>
        </div>
      </div>
            </div>
                </div>



                </section>
       
      
    
        </div>
    );
};

export default Card;