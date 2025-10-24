import React, { useEffect, useState } from 'react';
import { TreeContext } from './TreeContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const TreeProvider = ({children}) => {
    const [trees, setTrees] = useState([]);
    const [loader, setloader] = useState(true);
    const [topTrees, setTopTrees] = useState([]);
    const [plantCare, setPlantCAre] = useState([]);
    const [user, setUser] = useState(null)


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


// Authentication 
const signupUser = (email, password) =>{
   return createUserWithEmailAndPassword(auth, email, password)
}

const signInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}


const signOutUser=()=>{
    return signOut(auth);
}

useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser);
        setloader(false);
    })
    return ()=>{
        unsubscribe();
    }
}, [])



const provider = new GoogleAuthProvider();
const signinwithGoogle=()=>{
    return signInWithPopup(auth, provider)
    
}


    const TreeInfo = {
        trees, 
        loader,
        topTrees,
        plantCare,
        signupUser,
        signInUser,
        user,
        setUser,
        signOutUser,
        signinwithGoogle
 
    }


    return (
        <div>
            <TreeContext value={TreeInfo}>{children}</TreeContext>
        </div>
    );
};

export default TreeProvider;