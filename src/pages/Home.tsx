import { HeroSection } from '../components/home/HeroSection';
import HowAutomataWorks from '../components/home/HowAutomataWorks';

const Home: React.FC = () => {
    return (
        <div className="w-full bg-[#F5F5FA] overflow-y-auto overflow-x-hidden z-40">
            <HeroSection />
            <HowAutomataWorks />
        </div>
    );
};

export default Home;
