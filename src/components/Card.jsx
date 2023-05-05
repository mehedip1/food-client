import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';





const Card = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/recipes')
    .then(res => res.json())
    .then(data => setRecipes(data))
    .catch(error => console.log(error))
  },[])

    return (
        <div>
          <h2 className='mt-5 text-3xl text-white text-center'>Food Recipes</h2>
          <div className='md:grid grid-cols-3 gap-5 mt-5'>
          {
            recipes.map(recipe => <div
            key={recipe.id}
            
            >
            <div className="card w-96 bg-base-100 shadow-xl">
     <figure className="px-10 pt-10">
    <img src={recipe.img} alt="Shoes" className="rounded-xl" />
    </figure>
    <div className="card-body items-center text-center">
    <h2 className="card-title">{recipe.name}</h2>
      <div className="card-actions">
    
        <p>{recipe.ingredients}
        <Link to="/login"><button className="btn btn-primary">View</button></Link></p>
     
      
      </div>
     </div>
      </div>

            </div>
             )
          }


          </div>
         
         
        </div>
    );
};

export default Card;