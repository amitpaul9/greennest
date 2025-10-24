import React, { useContext } from 'react';
import { TreeContext } from '../../../Contexts/TreeContext';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase/Firebase.config';

const Profile = () => {

const {user, setUser} = useContext(TreeContext);


const handleUpdateProfile=(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
   const photo = e.target.photo.value;
    const profile = {displayName: name, photoURL:photo}
    e.target.reset();
    

    updateProfile(auth.currentUser, profile)
    .then(()=>{setUser(profile)})
    .catch(err=>console.log(err.message))
}

    return (
       <div >
         <div className='m-5 flex flex-col justify-center items-center '>
            <div className="card  w-96 shadow-sm" style={{ backgroundImage: 'linear-gradient(to right, #344e41, #3f5c4b, #4a7655)' }}>
  <figure className=" px-5 pt-5">
    <img 
      src={user.photoURL}
      alt="profile picture"
      className="rounded-full h-40 w-40" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">{user.displayName}</h2>
    <h3>{user.email}</h3>
  </div>

  <form className='flex flex-col justify-center items-center' onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset  rounded-box w-xs p-4" >


  <input type="text" className="input" placeholder="Your Name" name='name' />

  <input type="text" className="input" placeholder="Your Photo URL" name='photo' />

  <button className="btn bg-[#344e41] text-white mt-2">Update Profile</button>
</fieldset>
        </form>
</div>
 
        </div>
       
       </div>

    );
};

export default Profile;