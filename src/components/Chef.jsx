import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Chef = () => {

const [categories, setCategories] = useState([]);
  useEffect(() =>{
    fetch('https://the-yum-food-server-mehedip1.vercel.app/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
    .catch(error => console.log(error))
  },[])

  return (
    
    <>
      <h2 className='text-3xl font-bold text-center text-white mt-5'>Chef section</h2>
      <div className='md:grid grid grid-cols-3 mt-5 gap-5'>
         
        
     
      
     

       {
        categories.map(category =>
        <div key={category.id}>
        
         <div className="card w-45 bg-base-100 shadow-md hover:bg-slate-600">
         <figure><img src={category.img} alt="" /></figure>
       <div className="card-body">
       <h2 className="card-title">{category.name}
      
       </h2>
      <p>
       <Link>Recipes:{category.recipes}</Link></p>

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
