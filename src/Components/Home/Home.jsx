

import { TreeContext } from '../../../Contexts/TreeContext';
import CustomerReview from '../CustomerReview/CustomerReview';
import Reviews from '../CustomerReview/Reviews';
import HeroSection from '../HeroSection/HeroSection';
import PlantCare from '../PlantCare/PlantCare';
import Specialist from '../Specialist/Specialist';
import ToptreesCard from '../TreeCard/ToptreesCard';


const Home = () => {

    return (
        <div>
            <HeroSection></HeroSection>
            <ToptreesCard></ToptreesCard>
            <PlantCare></PlantCare>
            <Specialist></Specialist>
            {/* extra homepage section  */}
            {/* <CustomerReview></CustomerReview> */}
            <Reviews></Reviews>
        </div>
    );
};

export default Home;