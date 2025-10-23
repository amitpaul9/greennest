import React, { useEffect, useState } from 'react';
import { TreeContext } from './TreeContext';

const TreeProvider = ({children}) => {
    const [trees, setTrees] = useState([]);
    const [loader, setloader] = useState(true);
    const [topTrees, setTopTrees] = useState([]);
    const [plantCare, setPlantCAre] = useState([]);


useEffect(()=>{
    fetch('/TreeData.json')
    .then(res=> res.json())
    .then(data=>{setTrees(data);
        setloader(false)
    })
    .catch(err=> console.log(err))
}, [])

useEffect(()=>{
    fetch('/TopTrees.json')
    .then(res=> res.json())
    .then(data=>{setTopTrees(data);
        setloader(false);
    })
    .catch(err=> console.log(err))
}, [])

useEffect(()=>{
    fetch('/PlantCare.json')
    .then(res=> res.json())
    .then(data=>{setPlantCAre(data);
        setloader(false);
    })
    .catch(err=> console.log(err))
}, [])




    const TreeInfo = {
        trees, 
        loader,
        topTrees,
        plantCare,
 
    }


    return (
        <div>
            <TreeContext value={TreeInfo}>{children}</TreeContext>
        </div>
    );
};

export default TreeProvider;