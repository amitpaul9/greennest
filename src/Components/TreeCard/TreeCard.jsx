import React, { use } from 'react';
import { TreeContext } from '../../../Contexts/TreeContext';
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router';



const TreeCard = () => {

const {trees} = use(TreeContext);

    return (
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
           {trees.map(tree => <div key={tree.plantId} className="card bg-base-100 w-85 lg:w-96 shadow-sm">
     <figure className="px-10 pt-10">
       <img className="h-[270px] w-[300px] rounded-xl"
         src={tree.image}
         alt="plant"/>
     </figure>
     <div className="card-body items-center text-center">
       <h2 className="card-title">{tree.plantName}</h2>
   
   
      <div className='flex justify-between items-center w-full text-[16px] font-semibold'>
       <div className='flex items-center gap-1'><span><CiStar/></span>{tree.rating}</div>
       <div><span>$</span>{tree.price}</div>
      </div>
   
       <div className="card-actions mt-2">
         <Link className='btn bg-[#344e41] text-white' to={`/treedetails/${tree.plantId}`}>View Details</Link>
       </div>
     </div>
   </div>)}
           </div>
    );
};

export default TreeCard;