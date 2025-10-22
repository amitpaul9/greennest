import React, { useEffect, useState } from 'react';
import { TreeContext } from './TreeContext';

const TreeProvider = ({children}) => {
    const [trees, setTrees] = useState([])

useEffect(()=>{
    fetch('/TreeData.json')
    .then(res=> res.json())
    .then(data=>setTrees(data))
    .catch(err=> console.log(err))
}, [])



    const TreeInfo = {
        trees, 
    }


    return (
        <div>
            <TreeContext value={TreeInfo}>{children}</TreeContext>
        </div>
    );
};

export default TreeProvider;