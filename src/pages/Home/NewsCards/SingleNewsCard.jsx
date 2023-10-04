import React from 'react';
import { Link } from 'react-router-dom';

const SingleNewsCard = ({item}) => {
    
    const {title,image_url, thumbnail_url, details, _id} = item ;

    return (
        <div>
          <div className="card  ">
             <h2 className="card-title">{title}</h2>
  <figure><img className='' src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
   
    <p className='mt-3'> {
        details.length > 200 ?
        
        <p> {details.slice(0, 200)} <Link
        to={`news/${_id}`}
        className='text-blue-600 font-bold'> <br /> Read More</Link></p>
        :
        <p>{details}</p>
    } 
    
    </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default SingleNewsCard;