

import { Star } from 'lucide-react';
import { TreeContext } from '../../../Contexts/TreeContext';
import Reviews from '../CustomerReview/Reviews';
import HeroSection from '../HeroSection/HeroSection';
import PlantCare from '../PlantCare/PlantCare';
import Specialist from '../Specialist/Specialist';
import ToptreesCard from '../TreeCard/ToptreesCard';


const Home = () => {

    return (
        <div>
            <title>Home-GreenNest</title>
            <HeroSection></HeroSection>
            <ToptreesCard></ToptreesCard>
            <PlantCare></PlantCare>
            <Specialist></Specialist>
            {/* extra homepage section  */}
            <Reviews></Reviews> 
        </div>
    );
};

export default Home;