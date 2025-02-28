import HeroBackground from '../../assets/images/home/hero_background.svg';

export const HeroSection = () => {
    return (
        <section className="h-[520px] sm:h-[460px] md:h-[520px] lg:h-[756px] xl:h-[700px] mac:h-[736px] 2xl:h-[900px] flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden leading-tight bg-[#0B0E16]">
            {/* Hero Background Image */}
            <div className="w-full h-full absolute top-0 left-0">
                <img
                    src={HeroBackground}
                    style={{ width: '100%', height: '100%' }}
                    className="object-cover"
                />
            </div>
            {/* Hero Text */}
            <div className="z-50 w-full h-full flex items-center justify-center px-0 md:px-[16px]">
                <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] px-6 w-full text-white font-inter font-medium text-[40px] flex flex-col justify-start gap-y-[8px] sm:text-[50px] md:text-[55px] lg:text-[79.79px] lg:gap-y-4 xl:text-[88px] xl:gap-y-6">
                    <div className="flex flex-col">
                        <h2 className="leading-[120%]">Explore AI</h2>
                        <h2 className="leading-[120%]">Agents For Your</h2>
                        <h2 className="leading-[120%]">Browser</h2>
                    </div>
                    <div className="font-normal font-roboto text-xs w-[70%] md:text-sm lg:text-base lg:w-[65%] xl:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                    <a
                        href="https://app.kleo.network"
                        className="bg-blue-500 hover:bg-blue-700 text-[14px] w-fit rounded-[4px] py-[8px] px-[28px] mt-[8px] sm:px-[14px] xl:text-[20px] xl:py-[18px] xl:px-[32px] mac:text-[22.5px] mac:py-[20px] mac:px-[35px]"
                    >
                        Try for Free
                    </a>
                </div>
            </div>
        </section>
    );
};
