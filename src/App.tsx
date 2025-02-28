import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => {
    return (
        <div className="selection:bg-primary-600 selection:text-white flex flex-col font-inter h-full w-full items-center bg-[#F5F5FA]">
            <header className="flex w-full justify-center h-[44px] lg:h-[62px] xl:h-[62px] mac:h-[66px] 2xl:h-[88px] bg-[#131951] bg-opacity-[24%] backdrop-blur-lg z-50 fixed pointer-events-none">
                <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center">
                    <Navbar />
                </div>
            </header>

            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
            </Routes>

            <Footer />
        </div>
    );
};

export default App;
