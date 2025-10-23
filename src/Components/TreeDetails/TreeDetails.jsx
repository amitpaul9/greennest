import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const TreeDetails = () => {

const treeid = useParams();

const data = useLoaderData()
console.log(data)
const treeData = data.find(tree => String(tree.plantId)
 === treeid.toString());
console.log(treeData)

    return (
        <div>
            this is treeDetails
        </div>
    );
};

export default TreeDetails;