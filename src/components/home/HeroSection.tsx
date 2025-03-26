import React, { useEffect, useRef } from 'react';
import HeroBackground from '../../assets/images/home/hero_background.svg';
import Typed from 'typed.js';

export const HeroSection: React.FC = () => {
    const typedElementRef = useRef<HTMLSpanElement>(null);
    const typedInstanceRef = useRef<Typed | null>(null);
    
    useEffect(() => {
        if (typedElementRef.current) {
            typedInstanceRef.current = new Typed(typedElementRef.current, {
                strings: ['Build', 'Create', 'Own'],
                typeSpeed: 80,
                backSpeed: 50,
                backDelay: 1000,
                loop: true,
                showCursor: true,
                cursorChar: '|',
            });
        }
        
        return () => {
            if (typedInstanceRef.current) {
                typedInstanceRef.current.destroy();
            }
        };
    }, []);
    
    return (
        <section className="h-[520px] sm:h-[460px] md:h-[520px] lg:h-[756px] xl:h-[700px] mac:h-[736px] 2xl:h-[900px] flex justify-center relative rounded-bl-[50px] rounded-br-[50px] overflow-hidden leading-tight bg-[#0B0E16]">
            {/* Hero Background Image */}
            <div className="w-full h-full absolute top-0 left-0">
                <img
                    src={HeroBackground}
                    className="object-cover w-full h-full"
                    alt="Hero background"
                />
            </div>
            {/* Hero Content */}
            <div className="z-50 w-full h-full flex items-center justify-center px-0 md:px-[16px]">
                <div className="max-w-[540px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] px-6 w-full flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    {/* Left side: Text content */}
                    <div className="text-white font-inter font-medium text-[40px] flex flex-col justify-start gap-y-[8px] sm:text-[50px] md:text-[55px] lg:text-[70px] lg:gap-y-4 xl:text-[78px] xl:gap-y-6 lg:max-w-[50%]">
                        <div className="flex flex-col">
                            <h2 className="leading-[120%]">
                                <span ref={typedElementRef} ></span><span>AI Agents</span>
                            </h2>
                        </div>
                        <div className="font-normal font-roboto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-[90%]">
                            Automate workflows and Earn from your prompts
                        </div>
                        <a
                            href="https://download.autoact.io"
                            className="bg-blue-500 hover:bg-blue-700 text-[16px] font-medium w-fit rounded-[6px] py-[12px] px-[32px] mt-[16px] 
                            sm:text-[18px] sm:py-[14px] sm:px-[36px] 
                            md:text-[20px] md:py-[16px] md:px-[40px] 
                            lg:text-[22px] lg:py-[16px] lg:px-[40px] lg:mt-[24px] 
                            xl:text-[24px] xl:py-[18px] xl:px-[48px] 
                            mac:text-[26px] mac:py-[20px] mac:px-[52px] 
                            2xl:text-[28px] 2xl:py-[22px] 2xl:px-[58px] 
                            transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Try AutoAct
                        </a>
                    </div>
                    
                    {/* Right side: Video embed */}
                    <div className="hidden lg:block lg:w-[45%] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] shadow-xl rounded-lg overflow-hidden mt-8 lg:mt-0">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/t14q4cmMGWY" 
                            title="AutoAct Video"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                    
                    {/* Mobile video - shown below content on small screens */}
                    <div className="lg:hidden w-full h-[200px] sm:h-[240px] md:h-[280px] shadow-xl rounded-lg overflow-hidden mt-8">
                        <iframe 
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/t14q4cmMGWY" 
                            title="AutoAct Video"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};