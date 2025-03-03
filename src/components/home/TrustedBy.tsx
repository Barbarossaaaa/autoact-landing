import React from 'react';
import DraperUniversity from '../../assets/images/home/trustedBy/draper_university.svg';
import GitCoin from '../../assets/images/home/trustedBy/gitcoin.svg';
import Vana from '../../assets/images/home/trustedBy/vana.svg';

const TrustedBy: React.FC = () => {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="bg-[#131951] rounded-lg flex flex-col md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] p-4 gap-y-4 lg:p-6 lg:gap-y-8 xl:p-8">
                <h4 className="text-center font-inter font-semibold text-white lg:text-xl xl:text-2xl">
                    YOU ARE IN GOOD COMPANY
                </h4>
                <div className="w-full px-4 max-w-[1520px] mx-auto">
                    <div className="flex flex-row items-center justify-center gap-x-8 md:gap-x-12 lg:gap-x-16">
                        <div className="w-1/3 max-w-[180px] md:max-w-[220px] lg:max-w-[250px]">
                            <img
                                src={GitCoin}
                                alt="GitCoin"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-1/3 max-w-[180px] md:max-w-[220px] lg:max-w-[250px]">
                            <img
                                src={Vana}
                                alt="Vana"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="w-1/3 max-w-[180px] md:max-w-[220px] lg:max-w-[250px]">
                            <img
                                src={DraperUniversity}
                                alt="Draper University"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;