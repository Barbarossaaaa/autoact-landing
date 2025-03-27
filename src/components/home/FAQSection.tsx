import React, { useState } from 'react';
import MinusIconPath from '../../assets/images/home/faq/minus.svg';
import PlusIconPath from '../../assets/images/home/faq/plus.svg';

const faqs = [
    {
        question: 'What are AI agents in AutoAct?',
        answer: 'AI agents in AutoAct are NFT-based autonomous programs that can perform specific actions through Model Context Protocols (MCPs). Each agent is uniquely owned as an NFT and can be customized with various prompt workflows to automate tasks reliably while maintaining privacy and security through our Trusted Execution Environment.',
    },
    {
        question: 'How does AutoAct ensure privacy and security?',
        answer: 'AutoAct ensures privacy and security by loading context protocols as NFTs on a Trusted Execution Environment (TEE) enclave. This tamper-proof environment guarantees that your agent\'s actions and data remain private, while still maintaining transparency in how the agent operates. This approach solves the common privacy concerns associated with traditional AI agent implementations.',
    },
    {
        question: 'What are Model Context Protocols (MCPs)?',
        answer: 'Model Context Protocols (MCPs) are the core technology behind AutoAct that allow AI agents to connect to various tools and services. MCPs define how your agent interacts with different systems, giving you full authority over its actions. These protocols enable complex workflows while maintaining security, and you can choose which tools your AI agent connects to through our marketplace.',
    },
    {
        question: 'How can I earn passive income with AutoAct?',
        answer: 'AutoAct allows you to share your custom prompts and workflows with other users through our marketplace. When others use your workflows, you earn passive income. This creates an ecosystem where AI enthusiasts and experts can monetize their expertise, while others benefit from proven, reliable automation templates.',
    },
    {
        question: 'Who are AutoAct\'s partners?',
        answer: 'AutoAct is currently working with several key partners in the AI and blockchain space, including Olas, VANA, Camp Network, and Polygon. These partnerships strengthen our technology stack and help expand the capabilities of our AI agent ecosystem, particularly in areas of decentralized AI, identity solutions, and scalable blockchain infrastructure.',
    },
    {
        question: 'What makes AutoAct different from other AI platforms?',
        answer: 'AutoAct stands out through its unique combination of NFT ownership for AI agents, Trusted Execution Environments for privacy, and Model Context Protocols for versatile functionality. Unlike traditional AI services, AutoAct gives users true ownership and control over their AI agents, while enabling them to benefit financially from sharing successful workflows. Our focus on both privacy and interoperability solves critical problems in current AI implementations.',
    },
    {
        question: 'How do I get started with creating my own AI agent?',
        answer: 'Getting started with AutoAct is simple: create an account, mint your first AI agent as an NFT, then select or build Model Context Protocols to define its capabilities. You can either create custom workflows from scratch or use templates from our marketplace. Once configured, your agent can start performing automated tasks with the security of our Trusted Execution Environment, and you can share your workflows to generate passive income.',
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
