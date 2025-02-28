import React from 'react';
import Camp from '../../assets/images/home/trustedBy/camp.svg';
import DraperUniversity from '../../assets/images/home/trustedBy/draper_university.svg';
import GitCoin from '../../assets/images/home/trustedBy/gitcoin.svg';
import Polygon from '../../assets/images/home/trustedBy/polygon.svg';
import Vana from '../../assets/images/home/trustedBy/vana.svg';

const TrustedBy: React.FC = () => {
    return (
        <section className="w-full px-4 md:px-6 lg:px-8 xl:px-12">
            <div className="bg-[#131951] rounded-lg flex flex-col md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] p-4 gap-y-4 lg:p-6 lg:gap-y-8 xl:p-8">
                <h4 className="text-center font-inter font-semibold text-white lg:text-xl xl:text-2xl">
                    TRUSTED BY
                </h4>
                <div className="w-full px-4 max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] mx-auto flex flex-col gap-y-4 mac:flex-row mac:gap-y-0 mac:gap-x-4">
                    <div className="w-full flex flex-col gap-y-4 md:flex-row md:gap-y-0 md:gap-x-4 mac:w-4/5">
                        <div className="w-full flex items-center gap-x-4 md:w-1/2">
                            <div className="w-1/2">
                                <img
                                    src={GitCoin}
                                    alt="GitCoin"
                                />
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={Polygon}
                                    alt="Polygon"
                                />
                            </div>
                        </div>
                        <div className="w-full flex items-center gap-x-4 md:w-1/2">
                            <div className="w-1/2">
                                <img
                                    src={Vana}
                                    alt="Vana"
                                />
                            </div>
                            <div className="w-1/2">
                                <img
                                    src={Camp}
                                    alt="Camp"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 mx-auto md:w-1/4 mac:w-1/5 md:overflow-hidden md:rounded lg:rounded-lg xl:rounded-xl">
                        <img
                            src={DraperUniversity}
                            alt="Draper University"
                            className="h-auto md:max-h-[44px] lg:max-h-[95px] xl:max-h-[114px] mac:max-h-[90px] w-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default TrustedBy;
