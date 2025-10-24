import React, { use } from 'react';
import { TreeContext } from '../../../Contexts/TreeContext';

import TreeCard from '../TreeCard/TreeCard';

const Plants = () => {

const {loader} = use(TreeContext)


   if(loader){
           return <div className='flex justify-center items-center'><span className='loading loading-spinner text-success'></span></div>
       }
   
       else{ 
           return (<div className='flex flex-col justify-center items-center text-center mt-5 mb-5'>
               <h1   className='text-xl lg:text-3xl font-bold text-[#344e41] mb-3 '>Our Indoor Plants Collection</h1>
              <TreeCard></TreeCard>
           </div>
       )};
};

export default Plants;