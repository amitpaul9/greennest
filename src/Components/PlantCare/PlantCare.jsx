import React from 'react';

const PlantCare = () => {

 return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-bold text-[#344e41] mb-3">
        Plant Care Tips
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        <div className="card w-90 lg:w-100 bg-base-100 card-xs shadow-sm">
          <div className="card-body px-7">
            <h1 className="card-title flex justify-center w-full text-lg">
              🌱 Watering Tips
            </h1>
            <h2 className="font-semibold text-[16px]">
              Proper watering is one of the most important parts of plant care.
            </h2>
            <ol className="list-disc text-[13px]">
              <li>
                Check the soil: Before watering, touch the soil. If the top inch
                feels dry, it’s time to water.
              </li>
              <li>
                Avoid overwatering: Too much water can rot the roots. Always
                make sure the pot has drainage holes so extra water can flow
                out.
              </li>
              <li>
                Water deeply: When you water, let the water reach the roots —
                not just the surface.
              </li>
              <li>
                Morning is best: Watering early in the morning allows plants to
                absorb moisture before the day’s heat.
              </li>
              <li>
                Adjust for seasons: In summer, plants usually need more frequent
                watering. In winter, water less often as the soil stays moist
                longer.
              </li>
              <li>
                Use room-temperature water: Very cold or hot water can shock
                plant roots.
              </li>
            </ol>
            <div className="justify-end card-actions"></div>
          </div> 
        </div>


         <div className="card w-90 lg:w-100 bg-base-100 card-xs shadow-sm">
          <div className="card-body px-7">
            <h1 className="card-title flex justify-center w-full text-lg">
              ☀️ Sunlight Tips
            </h1>
            <h2 className="font-semibold text-[16px]">
              Plants need sunlight for photosynthesis — their way of making food. But not all plants need the same amount
            </h2>
            <div className=''>
              <ol className="list-disc text-[13px]">
              <li>Know your plant type:
                <ul className="list-disc pl-6"> 
                <li>Full-sun plants (like cacti, tomatoes) need 6–8 hours of direct sunlight.</li>
                <li>Partial-sun plants (like herbs, ferns) prefer 3–5 hours of sunlight.</li>
                <li>Low-light plants (like money plant, snake plant) can live well in indirect light.</li>
              </ul>
              </li>
              <li>
                Rotate regularly: Turn the pot every few days so all sides get light and grow evenly.
              </li>
              <li>
                Avoid harsh sunlight indoors: If the sunlight is too strong (especially through glass), it can burn the leaves. Use a light curtain or move the plant a bit away from the window.
              </li>
              <li>
                If natural light is low: Use a grow light to give extra support during darker months.
              </li>
              
            </ol>
            </div>
            <div className="justify-end card-actions"></div>
          </div> 
        </div>


         <div className="card w-90 lg:w-100 bg-base-100 card-xs shadow-sm">
          <div className="card-body px-7">
            <h1 className="card-title flex justify-center w-full text-lg">
              🌿 Fertilizing Tips
            </h1>
            <h2 className="font-semibold text-[16px]">
              Fertilizers give plants the nutrients they can’t get from soil alone.
            </h2>
            <ol className="list-disc text-[13px]">
              <li>
                Use the right fertilizer:
                <ul className="list-disc pl-6">
                    <li>Nitrogen (N) helps leaf growth.</li>
                    <li>Phosphorus (P) supports roots and flowers.</li>
                    <li>Potassium (K) boosts overall health and resistance.<br></br>
Choose a balanced NPK fertilizer (like 10-10-10) for most plants.</li>
                </ul>
              </li>
              <li>
                Don’t over-fertilize: Too much fertilizer can damage roots and cause yellow leaves.
              </li>
              <li>
                Feed during growing season: Most plants grow actively in spring and summer. Fertilize every 2–4 weeks then, but stop during winter.
              </li>
              <li>
                Organic options: Compost, banana peels, and eggshells are excellent natural fertilizers that slowly release nutrients.
              </li>
              <li>
                Water after fertilizing: It helps nutrients reach the roots evenly.
              </li>
            </ol>
            <div className="justify-end card-actions"></div>
          </div> 
        </div>

      </div>
    </div>
  );
};


export default PlantCare;


  


