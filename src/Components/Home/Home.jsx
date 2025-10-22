

import { TreeContext } from '../../../Contexts/TreeContext';
import HeroSection from '../HeroSection/HeroSection';
import PlantCare from '../PlantCare/PlantCare';
import ToptreesCard from '../TreeCard/ToptreesCard';


const Home = () => {

    return (
        <div>
            <HeroSection></HeroSection>
            <ToptreesCard></ToptreesCard>
            <PlantCare></PlantCare>
        </div>
    );
};

export default Home;