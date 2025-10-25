import React from "react";
import { CiStar } from "react-icons/ci";
import { useLoaderData, useParams } from "react-router";
import { toast } from "react-toastify";

const TreeDetails = () => {
  const { treeid } = useParams();
  // console.log(treeid)

  const data = useLoaderData();
  // console.log(data)

  const treeData = data.find(
    (tree) => String(tree.plantId) === treeid.toString()
  );
  console.log(treeData);

  const { availableStock, description, plantName, image, rating, price } =
    treeData;

  const handleBookNow = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Booking Successfull");
  };

  return (
    <div className="mt-8">
      <title>Plant Details-GreenNest</title>
      {/* <h1 className='text-[#344e41] text-3xl text-center'>Plant Details</h1> */}
      <div className="mt-5 mb-5 flex lg:flex-row flex-col  gap-8 justify-center px-12">
        <div className="">
          <img className="w-[500vh] h-[70vh]" src={image} alt="" />
        </div>
        <div className="">
          <h1 className="text-[#344e41] text-3xl font-semibold">{plantName}</h1>
          <p className="text-[#344e4195] text-[15px]">{description}</p>
          <div className="flex justify-between mt-3 font-semibold text-[#344e41] text-xl">
            <p>In Stocks: {availableStock}</p>
            <p className="flex items-center gap-1">
              <CiStar></CiStar>
              {rating}
            </p>
            <p>$ {price}</p>
          </div>
          <form onSubmit={handleBookNow}>
            <fieldset className="fieldset bg-[#344e4105] border-base-300 border p-4 w-full mt-10">
              <label className="label">Name</label>
              <input type="text" className="input w-full" required />

              <label className="label">Email</label>
              <input type="email" className="input w-full" required />

              <button className="btn text-white mt-4 bg-[#344e41]">
                Book Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TreeDetails;
