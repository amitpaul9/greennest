import React from "react";

const CustomerReview = () => {
  return (
    <div className="mt-6 mb-3 flex flex-col justify-center items-center">
      <h1 className="text-3xl text-[#344e41] text-center font-bold mb-4">
        Customer's Reviews
      </h1>
      <div className="grid lg:grid-cols-3 gap-3">
        <div className="flex ">
          <div className="-mr-4 ">
            <img
              className="left-5 h-10 w-10 rounded-full"
              src="https://i.ibb.co.com/FLwVJ0B1/premium-photo-1688740375397-34605b6abe48.jpg"
              alt="customer image"
            />
          </div>
          <div className="px-5 shadow-sm w-100 py-3 bg-[#344e4120]">
            <h1 className="text-[#344e41] font-semibold">Lia Gomez</h1>
            <p>
              I absolutely love the plants I bought from this shop! The Snake
              Plant and Money Plant arrived in perfect condition — fresh, green,
              and beautifully packed. It really brightened up my living room.
              The owner also gave me some great tips for plant care. Highly
              recommended!
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>


        <div className="flex ">
          <div className="-mr-4 ">
            <img
              className="left-5 h-10 w-10 rounded-full"
              src="https://i.ibb.co.com/FLwVJ0B1/premium-photo-1688740375397-34605b6abe48.jpg"
              alt="customer image"
            />
          </div>
          <div className="px-5 shadow-sm w-100 py-3 bg-[#344e4160]">
            <h1 className="text-[#344e41] font-semibold">Lia Gomez</h1>
            <p>
              I absolutely love the plants I bought from this shop! The Snake
              Plant and Money Plant arrived in perfect condition — fresh, green,
              and beautifully packed. It really brightened up my living room.
              The owner also gave me some great tips for plant care. Highly
              recommended!
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>


        <div className="flex ">
          <div className="-mr-4 ">
            <img
              className="left-5 h-10 w-10 rounded-full"
              src="https://i.ibb.co.com/FLwVJ0B1/premium-photo-1688740375397-34605b6abe48.jpg"
              alt="customer image"
            />
          </div>
          <div className="px-5 shadow-sm w-100 py-3 bg-[#344e4120]">
            <h1 className="text-[#344e41] font-semibold">Lia Gomez</h1>
            <p>
              I absolutely love the plants I bought from this shop! The Snake
              Plant and Money Plant arrived in perfect condition — fresh, green,
              and beautifully packed. It really brightened up my living room.
              The owner also gave me some great tips for plant care. Highly
              recommended!
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
