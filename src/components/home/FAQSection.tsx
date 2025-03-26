import React, { useState } from 'react';
import MinusIconPath from '../../assets/images/home/faq/minus.svg';
import PlusIconPath from '../../assets/images/home/faq/plus.svg';

const faqs = [
    {
        question: 'Does AutoAct store my personal information?',
        answer: 'No, AutoAct is designed with your privacy in mind. All your information is stored locally in your browser and never sent to our servers. This means your data remains completely under your control, but also that you will lose your saved data if you uninstall the extension. We recommend exporting your private key from the settings page as a backup if you plan to reinstall.',
    },
    {
        question: 'What LLMs does AutoAct use?',
        answer: 'AutoAct intelligently switches between Gemini and Claude APIs based on the complexity of the form-filling task. Our proprietary routing model automatically determines which AI is best suited for each specific form, ensuring optimal accuracy and performance without you having to choose manually. We continuously evaluate and may add new models as the AI landscape evolves.',
    },
    {
        question: 'How much does it cost?',
        answer: "AutoAct operates on a pay-as-you-go model with no subscription required. Each form completion costs only $0.05 USD, and we're happy to offer your first 10 forms completely free! This pricing model ensures you only pay for what you actually use. Our currency converter in the wallet section shows exactly what this means in your local currency.",
    },
    {
        question: 'How do I add funds to my account?',
        answer: 'Adding funds is simple: just click on the wallet section in the extension and select "Top Up." We support multiple payment methods including credit/debit cards, PayPal, and major cryptocurrencies (Bitcoin, Ethereum, and USDC). Funds are added instantly, and there\'s no minimum deposit requirement. For business users, we also offer invoice-based payment options.',
    },
    {
        question: 'I lost my account, can I recover my funds?',
        answer: 'Your account recovery depends on your private key, which is viewable in the settings page. This key is critical for accessing your funds if you switch browsers or devices. We strongly recommend saving this key in a secure password manager or writing it down and storing it safely. With your private key, you can recover your account and remaining balance at any time. Without it, unfortunately, we cannot restore access to your funds due to our privacy-first design.',
    },
    {
        question: 'Is AutoAct compatible with all websites and forms?',
        answer: "AutoAct works with most standard web forms including contact forms, registration pages, applications, and surveys. We're continuously expanding compatibility, but some highly specialized or security-protected forms may have limitations. Our technology adapts to most form structures, but if you encounter an incompatible form, please report it through the feedback option and we'll prioritize adding support.",
    },
    {
        question: 'How accurate is AutoAct at filling forms?',
        answer: "AutoAct achieves over 95% accuracy across standard forms. The extension analyzes both form fields and surrounding context to understand exactly what information is needed. You'll always have a chance to review and edit before submission. Our system also learns from common corrections to continuously improve accuracy. For specialized industry forms, you can save custom templates to further enhance precision.",
    },
];

const FAQSection: React.FC = () => {
    // State to track which FAQ is open
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    // Toggle the index of the open FAQ
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-[60px] sm:mt-[80px] lg:mt-[100px] mac:mt-[120px] 2xl:mt-[150px] mb-[40px] sm:mb-[50px] md:mb-[60px] lg:mb-[80px] xl:mb-[100px] 2xl:mb-[120px]">
            <section className="w-full flex justify-center">
                <div className="max-w-[328px] sm:max-w-[440px] md:max-w-[488px] lg:max-w-[704px] xl:min-w-[980px] mac:min-w-[1140px] 2xl:min-w-[1520px]">
                    <div className="flex flex-col w-full items-center gap-6 lg:gap-10 xl:flex-row xl:items-start mac:justify-between">
                        {/* Title */}
                        <div className="font-semibold text-2xl text-center max-w-[250px] lg:font-bold lg:text-[40px] lg:leading-tight lg:max-w-[350px] xl:text-left xl:max-w-[240px] xl:font-semibold xl:text-[38px] xl:leading-snug mac:text-[44px] 2xl:text-[58px]">
                            Frequently Asked Questions
                        </div>
                        {/* Question Container */}
                        <div className="py-6 px-4 bg-white flex flex-col gap-4 rounded-lg sm:rounded-2xl md:px-6 lg:py-8 xl:py-6 xl:w-full mac:rounded-[18px] mac:max-w-[752px] 2xl:max-w-[1003px] 2xl:rounded-[24px] 2xl:py-8 2xl:px-10">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col gap-2 xl:gap-[10px] mac:gap-[12px]"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full text-left flex justify-between items-center gap-4 2xl:gap-[18px]"
                                    >
                                        <div
                                            className={`font-medium text-sm md:text-base lg:text-2xl xl:text-xl 2xl:text-[24px] ${
                                                openIndex === index
                                                    ? 'text-blue-600'
                                                    : 'text-black'
                                            }`}
                                        >
                                            {faq.question}
                                        </div>
                                        {/* Toggling Plus/Minus Icon */}
                                        <img
                                            src={
                                                openIndex === index
                                                    ? MinusIconPath
                                                    : PlusIconPath
                                            }
                                            alt={
                                                openIndex === index
                                                    ? 'Minus Icon'
                                                    : 'Plus Icon'
                                            }
                                            className="w-5 h-5 text-blue-600"
                                        />
                                    </button>

                                    {/* Answer */}
                                    {openIndex === index && (
                                        <div className="font-roboto font-normal text-[11px] md:text-sm text-black lg:text-base 2xl:text-lg">
                                            {faq.answer}
                                        </div>
                                    )}

                                    {index !== faqs.length - 1 && (
                                        <hr className="text-gray-200 w-full lg:mt-2" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQSection;
