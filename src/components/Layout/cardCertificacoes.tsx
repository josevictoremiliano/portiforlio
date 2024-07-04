"use client"
import React from 'react';

interface CardProps {
    title?: string;
    description?: string;
    link?: string;
    tags: string[];
}

export default function Card({ title, description, link, tags }: CardProps) {
    return (
        <div className="bg-zinc-900 hover:card shadow-lg rounded-lg p-4 transition-all ">
            <h2 className="text-lg font-bold text-gray-100">{title}</h2>
            <p className="text-sm text-gray-500">{description}</p>
            <div className="flex flex-wrap items-center gap-2 mt-4">
                {tags.map((tag, index) => (
                    <span key={index} className="text-xs text-gray-100 bg-gray-700 px-2 py-1 rounded-md">{tag}</span>
                ))}
            </div>
           {
                link && (
                     <a href={link} target="_blank" rel="noopener noreferrer" className="bg-zinc-800 p-1 rounded-md text-center text-yellow-400 font-semibold mt-4 block text-sm hover:text-yellow-100 hover:bg-zinc-700">
                    {
                        typeof window !== 'undefined' && (window.innerWidth <= 580 ? 'Toque' : 'Click')
                    } para saber mais
                    </a>
                ) 
           }
        </div>
    );
}