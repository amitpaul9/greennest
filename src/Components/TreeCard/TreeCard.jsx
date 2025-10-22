import React, { useContext } from 'react';
import { TreeContext } from '../../../Contexts/TreeContext';

const TreeCard = () => {

const {trees} = useContext(TreeContext);
console.log(trees)

    return (
        <div>
            
        </div>
    );
};

export default TreeCard;