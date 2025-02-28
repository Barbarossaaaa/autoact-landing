import React from 'react';
import { useLocation } from 'react-router-dom';
import Discord from '../assets/images/home/footer/discord.svg';
import Email from '../assets/images/home/footer/email.svg';
import FooterAutoActLogo from '../assets/images/home/footer/footer_autoact_logo.svg';
import JoinDiscordBackground from '../assets/images/home/footer/join_discord_background.svg';

const Footer: React.FC = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <div className="w-full mt-[150px] md:mt-[185px] lg:mt-[212px] xl:mt-[170px] mac:mt-[250px] 2xl:mt-[435px]">
            {/* Footer section */}
            <section className="w-full flex justify-center items-start bg-gray-blue-100 rounded-t-3xl sm:rounded-t-[32px] md:rounded-t-[40px] 2xl:rounded-t-[50px] p-4 pt-[116px] md:pt-[124px] lg:pt-[132px] xl:pt-[160px] relative bg-[#EAECF5]">
                <div className="w-[328px] sm:w-[440px] md:w-[488px] lg:w-[704px] xl:w-[980px] mac:w-[1140px] 2xl:w-[1520px] relative">
                    <div className="flex flex-col gap-6 xl:gap-3 2xl:gap-4 items-start w-full xl:items-center">
                        {/* Company Logo and Text */}
                        <div className="flex flex-col w-full gap-2 lg:gap-4 items-start xl:items-center xl:gap-3 2xl:gap-4">
                            <div className="flex items-center gap-x-2">
                                <img
                                    src={FooterAutoActLogo}
                                    className="h-8 xl:h-10 mac:h-[45px] 2xl:h-[60px] w-auto"
                                />
                                <span className="text-blue-600 font-bold text-lg lg:text-xl xl:text-2xl">
                                    AutoAct
                                </span>
                            </div>
                            <div className="font-roboto font-normal text-base mac:text-[18px] 2xl:text-[24px]">
                                Kleo Network is a user owned data DAO.
                            </div>
                        </div>
                        {/* Contact Number and Email */}
                        <div className="flex flex-col w-full gap-4 xl:flex-row xl:gap-[20px] xl:justify-center">
                            {/* Email Pill */}
                            <div className="flex items-center px-3 xl:px-4 py-[6px] xl:py-3 mac:px-[18px] 2xl:py-4 2xl:px-6 bg-white bg-opacity-50 gap-2 leading-[34px] w-max rounded-s-full rounded-e-full">
                                <img
                                    src={Email}
                                    className="h-18 xl:h-[11px] mac:h-[13px] 2xl:h-[17px]"
                                />
                                <div className="font-roboto font-medium text-sm xl:text-[12px] mac:text-sm 2xl:text-base">
                                    contact@kleo.network
                                </div>
                            </div>
                        </div>
                        {/* Navigation Links */}
                        <div className="flex flex-col xl:flex-row items-start xl:justify-between w-full gap-2 font-roboto font-normal text-sm md:text-base 2xl:text-[18px] leading-[1.3] xl:mt-[28px] xl:pb-[16px] mac:mt-[33px] mac:pb-[18px] 2xl:mt-[44px] 2xl:pb-[24px]">
                            <a
                                href="/"
                                className={`${
                                    pathname === '/'
                                        ? 'font-semibold font-inter'
                                        : ''
                                } hover:font-semibold`}
                            >
                                Home
                            </a>
                            <a
                                href="https://github.com/Kleo-Network"
                                className="hover:font-semibold"
                                target="_blank"
                            >
                                Github
                            </a>
                            <a
                                href="http://docs.kleo.network/"
                                className="hover:font-semibold"
                                target="_blank"
                            >
                                Documentation
                            </a>
                            <a
                                href="mailto:contact@kleo.network"
                                className="hover:font-semibold"
                                target="_blank"
                            >
                                Contact Us
                            </a>
                        </div>
                        {/* Social Media Links */}
                        {/* All rights reserved */}
                        <div className="flex items-start w-full border-t border-[#D5D9EB] pt-2 font-roboto font-normal text-sm leading-[1.7] xl:py-[12px] mac:py-[14px] 2xl:py-[18px]">
                            All rights reserved. www.autoact.network
                        </div>
                    </div>
                </div>
                {/* Join Discord Card */}
                <div className="max-w-[328px] sm:max-w-[440px] md:max-w-[488px] lg:max-w-[704px] xl:max-w-[980px] mac:max-w-[1140px] 2xl:max-w-[1520px] absolute -top-[90px] sm:-top-[70px] md:-top-[105px] xl:-top-[120px] mac:-top-[130px] w-full text-white bg-primary-600 rounded-lg md:rounded-[32px] xl:rounded-[16px] mac:rounded-[18px] 2xl:rounded-[24px] overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <img
                            src={JoinDiscordBackground}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="selection:bg-white selection:text-purple-600 flex flex-col items-center xl:items-start xl:text-left xl:max-w-[500px] mac:max-w-[560px] 2xl:max-w-[745px] text-center gap-4 2xl:gap-6 py-6 px-4 md:p-8 xl:py-[40px] xl:px-[56px] mac:p-[60px] 2xl:p-[80px] relative">
                        {/* Text */}
                        <div className="flex flex-col gap-1 md:gap-4 xl:gap-[12px] mac:gap-4 w-full leading-[1.3]">
                            <div className="font-semibold text-2xl md:text-[32px] lg:text-[40px] xl:text-[38px] mac:text-[44px]">
                                Still have questions?
                            </div>
                            <div className="font-roboto font-normal text-[11px] md:text-sm lg:text-base mac:text-sm">
                                Can’t find the answer you’re looking for? Please
                                chat to our friendly team. We will do our best
                                to assist you with the questions.
                            </div>
                        </div>
                        {/* Discord Button */}
                        <a
                            className="px-4 py-2 bg-white text-blue-600 flex gap-2 items-center rounded-md hover:bg-gray-200 cursor-pointer"
                            href="https://discord.gg/duvjD6yvzf"
                            target="_blank"
                        >
                            <img
                                src={Discord}
                                className="h-[14px]"
                            />
                            <p className="font-normal text-sm">
                                Join Our Discord
                            </p>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
