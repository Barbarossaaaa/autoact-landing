import FAQSection from '../components/home/FAQSection';
import { HeroSection } from '../components/home/HeroSection';
import HowAutomataWorks from '../components/home/HowAutomataWorks';
import TrustedBy from '../components/home/TrustedBy';

const Home: React.FC = () => {
    return (
        <div className="w-full bg-[#F5F5FA] overflow-y-auto overflow-x-hidden z-40">
            <HeroSection />
            <HowAutomataWorks />
            <TrustedBy />
            <FAQSection />
        </div>
    );
};

export default Home;
