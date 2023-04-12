import React from 'react';
import aboutUs from '../images/aboutUs.png';

const cards = [
    {
        title: 'Large Language Models',
        image: aboutUs,
        text: 'Large Language Models, are powerful artificial intelligence models that use deep learning techniques to generate human-like text responses. They are trained on vast amounts of data and can understand and generate text across a wide range of topics, making them versatile tools for various natural language processing tasks.',
    },
    {
        title: 'Content Generation',
        image: '',
        text: 'GPT-4 can be used for generating high-quality content, such as articles, blogs, social media posts, and marketing copy. It could help businesses, content creators, and marketers generate engaging and relevant text for various purposes.',
    },
    {
        title: 'Content Summarization',
        image: '',
        text: 'Toolsets used for creative writing, including generating stories, poems, and scripts. It could assist writers in generating ideas, expanding on storylines, and exploring different writing styles and genres.',
    },
    {
        title: 'Language Translation',
        image: '',
        text: 'could potentially be used for improving language translation capabilities, helping to automatically translate text between different languages with high accuracy and fluency.',
    },
    {
        title: 'Virtual Assistants',
        image: '',
        text: 'could be integrated into virtual assistants or chatbots, providing them with enhanced language generation capabilities for generating more human-like responses in natural language conversations.',
    },
    {
        title: 'Education and Training',
        image: '',
        text: 'We can provide Ai assisted tools for educational purposes, assisting with generating learning materials, creating interactive tutorials, and providing personalized feedback to learners.',
    },
];

const AiTools = () => {
    return (
        <div className="max-w-1200 mx-auto px-4 py-16 md:max-w-960 md:px-3 sm:max-w-600 sm:px-2">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((card, index) => (
                    <div key={index} className="flex flex-col h-full">
                        <img className="h-200 bg-cover" src={card.image} alt={card.title} />
                        <div className="flex flex-col flex-grow p-4">
                            <h5 className="text-lg font-semibold mb-2">{card.title}</h5>
                            <p className="text-sm">{card.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AiTools;
