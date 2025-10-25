
import { TreeContext } from '../../../Contexts/TreeContext';

const Specialist = () => {


    return (
         <div className="mt-10 flex flex-col items-center justify-center mb-5">
      <h1 className="text-center text-3xl font-bold text-[#344e41] mb-3">
        Meet Our Green Experts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="card bg-base-100 w-90 lg:w-75 shadow-sm">
  <figure className='p-5'>
    <img className='h-[150px]'
      src="/assets/spc1.jpg"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#344e41]">Dr. Maya Lin</h2>
    <p className='text-[#344e4180]'>Ethnobotany & Plant Medicine</p>

  </div>
</div>

<div className="card bg-base-100 w-90 lg:w-75 shadow-sm">
  <figure className='p-5'>
    <img className='h-[150px]'
      src="/assets/spc2.jpg"
      alt="plant specialist" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#344e41]">Dr. Ethan Cole</h2>
    <p className='text-[#344e4180]'>Urban Horticulture & Vertical Farming</p>

  </div>
</div>

<div className="card bg-base-100 w-90 lg:w-75 shadow-sm">
  <figure className='p-5'>
    <img className='h-[150px]'
      src="/assets/spc3.jpg"
      alt="plant specialist" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#344e41]">Dr. Clara Bennett</h2>
    <p className='text-[#344e4180]'>Plant Genetics & Crop Improvement</p>

  </div>
</div>

<div className="card bg-base-100 w-90 lg:w-75 shadow-sm">
  <figure className='p-5'>
    <img className='h-[150px]'
      src="/assets/spc4.jpg"
      alt="plant specialist" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-[#344e41]">Dr. Nina Kapoor</h2>
    <p className='text-[#344e4180]'>Climate-Resilient Flora & Reforestation</p>

  </div>
</div>



        </div>
        </div>
    );
};

export default Specialist;