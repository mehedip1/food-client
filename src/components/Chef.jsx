import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Chef = () => {

const [categories, setCategories] = useState([]);
  useEffect(() =>{
    fetch('http://localhost:5000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error))
  },[])

  return (
    
    <>
      <h2 className='text-3xl font-bold text-center mt-5'>Chef section</h2>
      <div className='md:grid grid grid-cols-2 mt-5'>
         
        
     
      
     

       {
        categories.map(category =>
        <div key={category.id}>
        
         <div className="card w-96 bg-base-100 shadow-xl">
         <figure><img src={category.img} alt="Shoes" /></figure>
       <div className="card-body">
       <h2 className="card-title">{category.name}
      
       </h2>
      <p>
       <Link>{category.recipes}</Link></p>

       <p>Experience:<Link>{category.experience}</Link></p>
       <p>Likes:<Link>{category.likes}</Link></p>
          
      <div className="card-actions justify-end">
      <Link to="/recipes"><button className="btn btn-primary">Recipes</button></Link>
       </div>
      </div>
         </div>
        
       

         
       
        
       
        
         </div>)
         }

      </div>
       </>
  
  );
};

export default Chef;
