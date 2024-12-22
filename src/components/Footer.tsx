import { Link, NavLink } from 'react-router-dom';
import FooterAutocatLogo from '../assets/images/navbar/autocat_logo.svg';

const Footer: React.FC = () => {
    return (
        <div className="w-full bg-[#F5F5FA]">
            {/* Footer section */}
            <section className="w-full flex justify-center items-start rounded-t-3xl sm:rounded-t-[32px] md:rounded-t-[40px] 2xl:rounded-t-[50px] p-4 relative bg-[#EAECF5]">
                <div className="w-[328px] sm:w-[440px] md:w-[488px] lg:w-[704px] xl:w-[980px] mac:w-[1140px] 2xl:w-[1520px] relative">
                    <div className="flex flex-col gap-6 xl:gap-3 2xl:gap-4 items-start w-full xl:items-center">
                        {/* Company Logo and Text */}
                        <div className="flex flex-col w-full gap-2 lg:gap-4 items-start xl:items-center xl:gap-3 2xl:gap-4">
                            <div className="bg-black p-2 rounded-md">
                                <img
                                    src={FooterAutocatLogo}
                                    className="h-8 xl:h-10 mac:h-[45px] 2xl:h-[60px] w-auto"
                                />
                            </div>
                            <div className="font-roboto font-normal text-base mac:text-[18px] 2xl:text-[24px]">
                                Autocat Network is a user owned data DAO.
                            </div>
                        </div>
                        {/* Navigation Links */}
                        <div className="flex flex-col xl:flex-row items-start xl:justify-center w-full gap-2 font-roboto font-normal text-sm md:text-base 2xl:text-[18px] leading-[1.3] xl:mt-[28px] xl:pb-[16px] mac:mt-[33px] mac:pb-[18px] 2xl:mt-[44px] 2xl:pb-[24px] xl:gap-6">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:font-semibold ${
                                        isActive
                                            ? 'font-semibold font-inter'
                                            : ''
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <Link
                                to="http://docs.kleo.network/"
                                className="hover:font-semibold"
                                target="_blank"
                            >
                                Documentation
                            </Link>
                        </div>
                        {/* All rights reserved */}
                        <div className="flex items-start w-full border-t border-[#D5D9EB] pt-2 font-roboto font-normal text-sm leading-[1.7] xl:py-[12px] mac:py-[14px] 2xl:py-[18px]">
                            All rights reserved. www.autocat.network
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
