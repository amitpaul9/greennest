import React, { useContext } from 'react';
import { TreeContext } from '../../../Contexts/TreeContext';

const Profile = () => {

const {user} = useContext(TreeContext);

    return (
        <div className='m-5 flex justify-center '>
            <div className="card  w-96 shadow-sm" style={{ backgroundImage: 'linear-gradient(to right, #344e41, #3f5c4b, #4a7655)' }}>
  <figure className=" px-5 pt-5">
    <img
      src={user.photoURL}
      alt="profile picture"
      className="rounded-full" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">{user.displayName}</h2>
    <h3>{user.email}</h3>
  </div>
</div>
        </div>
    );
};

export default Profile;