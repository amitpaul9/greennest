import React, { useContext } from 'react';
import { TreeContext } from '../Contexts/TreeContext';
import { Navigate, useLocation } from 'react-router';

const PrivetRoute = ({children}) => {
   const {user, loader, authLoading} = useContext(TreeContext);
   const location = useLocation();
    
if(authLoading || loader){
        return <span className='loading loading-spinner text-success'></span>
    }

    else if(user){
        return children;
       
    }

     return <Navigate state={location?.pathname} to="/login"></Navigate>


};

export default PrivetRoute;