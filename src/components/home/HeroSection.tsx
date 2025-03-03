import React, { useState, useEffect, useRef } from 'react';
import HeroBackground from '../../assets/images/home/hero_background.svg';

export const HeroSection: React.FC = () => {
    const initialValue: number = 1234533123;
    const [count, setCount] = useState<number>(0);
    const [isInitialAnimationComplete, setIsInitialAnimationComplete] = useState<boolean>(false);
    const animationFrameRef = useRef<number | null>(null);
    
    // Initial load animation
    useEffect(() => {
        let startTimestamp: number;
        const animationDuration: number = 2000; // 2 seconds for initial animation
        
        const step = (timestamp: number): void => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress: number = Math.min((timestamp - startTimestamp) / animationDuration, 1);
            
            // Easing function for smoother acceleration at the end
            const easedProgress: number = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easedProgress * initialValue));
            
            if (progress < 1) {
                animationFrameRef.current = requestAnimationFrame(step);
            } else {
                setCount(initialValue);
                setIsInitialAnimationComplete(true);
            }
        };
        
        animationFrameRef.current = requestAnimationFrame(step);
        
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);
    
    // Incremental counter after initial animation completes
    useEffect(() => {
        if (!isInitialAnimationComplete) return;
        
        // Set up interval to increment the counter
        const intervalId: any = setInterval(() => {
            // Randomly increment by 1 or 2
            const increment: number = Math.random() > 0.5 ? 1 : 2;
            setCount(prevCount => prevCount + increment);
        }, 2000); // Update every 2 seconds
        
        // Clean up interval on component unmount
        return () => clearInterval(intervalId);
    }, [isInitialAnimationComplete]);
    
    // Format number with commas
    const formattedCount: string = count.toLocaleString();
    
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
            {/* Hero Text */}
            <div className="z-50 w-full h-full flex items-center justify-center px-0 md:px-[16px]">
                <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[664px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] px-6 w-full text-white font-inter font-medium text-[40px] flex flex-col justify-start gap-y-[8px] sm:text-[50px] md:text-[55px] lg:text-[79.79px] lg:gap-y-4 xl:text-[88px] xl:gap-y-6">
                    <div className="flex flex-col">
                        <h2 className="leading-[120%]">Automagically</h2>
                        <h2 className="leading-[120%]">Fill your forms</h2>
                    </div>
                    <div className="font-normal font-roboto text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl w-[70%] lg:w-[65%]">
                        Saved <span className="font-semibold">{formattedCount}</span> minutes of your precious time!
                    </div>
                    <a
                        href="https://download.autoact.io"
                        className="bg-blue-500 hover:bg-blue-700 text-[16px] font-medium w-fit rounded-[6px] py-[12px] px-[32px] mt-[16px] 
                        sm:text-[18px] sm:py-[14px] sm:px-[36px] 
                        md:text-[20px] md:py-[16px] md:px-[40px] 
                        lg:text-[24px] lg:py-[18px] lg:px-[48px] lg:mt-[24px] 
                        xl:text-[28px] xl:py-[20px] xl:px-[56px] 
                        mac:text-[28px] mac:py-[22px] mac:px-[60px] 
                        2xl:text-[32px] 2xl:py-[24px] 2xl:px-[64px] 
                        transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Get Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
};