import AddToAutoAct from '../../assets/images/home/howAutocatWorks/add_to_autoact.svg';
import MagicallyFillForms from '../../assets/images/home/howAutocatWorks/magically_fill_forms.svg';
import SaveToAutoAct from '../../assets/images/home/howAutocatWorks/save_to_autoact.svg';

const HowAutomataWorks: React.FC = () => {
    return (
        <section className="w-full flex justify-center my-8 lg:my-10 xl:my-24">
            <div className="max-w-[440px] sm:max-w-[488px] md:max-w-[488px] lg:max-w-[980px] xl:max-w-[1140px] mac:max-w-[1140px] 2xl:max-w-[1520px] flex w-full h-full items-center px-4">
                <div className="flex flex-col gap-6 xl:gap-10 mac:gap-[50px] w-full h-max items-center">
                    {/* How Kleo Works Question & Answer */}
                    <div className="flex flex-col items-center justify-normal gap-1 xl:gap-[10px] mac:gap-4 md:max-w-[320px] lg:max-w-[428px] xl:max-w-[500px] mac:max-w-[560px] 2xl:max-w-[745px]">
                        <div className="font-semibold text-center text-2xl md:text-[32px] lg:text-[40px] xl:text-[42px] mac:text-5xl 2xl:text-[58px]">
                            How It Works?
                        </div>
                        <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-center text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </div>
                    </div>

                    {/* 3 Cards explaining workflow */}
                    <div className="flex flex-col lg:flex-row justify-start lg:justify-evenly items-center lg:items-stretch gap-4 md:gap-6 xl:gap-[21px] mac:gap-6 2xl:gap-[30px] [text-wrap:balance]">
                        {/* Card - 1 */}
                        <div className="w-full lg:w-1/3 lg:min-h-full text-white flex flex-col p-4 lg:p-6 bg-blue-600 justify-start items-center rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
                            {/* Icon */}
                            <img
                                src={AddToAutoAct}
                                className="w-[35%] lg:w-1/2"
                            />
                            {/* Text */}
                            <div className="selection:bg-white selection:text-primary-600 flex flex-col justify-start items-center text-center gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                                    Add to AutoAct
                                </div>
                                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-white">
                                Select the text on any webpage, and add to autoact button pops up right beside upon selection! 
                                </div>
                            </div>
                        </div>
                        {/* Card - 2 */}
                        <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start items-center rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
                            {/* Icon */}
                            <img
                                src={SaveToAutoAct}
                                className="w-[35%] lg:w-1/2"
                            />
                            {/* Text */}
                            <div className="flex flex-col justify-start items-center text-center gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                                    Save to AutoAct
                                </div>
                                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-gray-800">
                                    This will open up the AutoAct sidebar in your browser, save this information to provide contexts for form filling.
                                </div>
                            </div>
                        </div>
                        {/* Card - 3 */}
                        <div className="w-full lg:w-1/3 lg:min-h-full flex flex-col p-4 lg:p-6 bg-white justify-start items-center rounded-lg md:rounded-2xl lg:rounded-3xl mac:rounded-[18px] 2xl:rounded-[20px] gap-4 lg:gap-6">
                            {/* Icon */}
                            <img
                                src={MagicallyFillForms}
                                className="w-[35%] lg:w-1/2"
                            />
                            {/* Text */}
                            <div className="flex flex-col justify-start items-center text-center gap-2 lg:gap-4 xl:gap-[12px] mac:gap-[14px] 2xl:gap-4">
                                <div className="font-semibold text-lg md:text-2xl 2xl:text-[32px]">
                                    Magically Fill Forms
                                </div>
                                <div className="font-nokora font-normal text-[11px] md:text-sm xl:text-base xl:leading-[30.6px] 2xl:text-lg text-gray-800">
                                    On any page that has forms, our magic button will be visible and allow you to fill forms "automagically"!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowAutomataWorks;
