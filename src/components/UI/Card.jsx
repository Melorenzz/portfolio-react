import React from "react";

export default function Card({title, count, description, icon, link}) {
    return (
        <a href={link} className='about_column'>
            <div className='top_column'>
                <div className='icon'>
                    <img src={icon} alt="icon"/>
                </div>
                <span data-aos="fade-left" className='count'>{count}</span>
            </div>
            <div className='info'>
                <p data-aos="fade-up" className='column_title'>{title}</p>
                <div className='description'>
                    <p data-aos="fade-up">{description}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                         stroke-linejoin="round"
                         className="lucide lucide-arrow-up-right w-4 h-4 text-white/50 group-hover:text-white transition-colors">
                        <path d="M7 7h10v10"></path>
                        <path d="M7 17 17 7"></path>
                    </svg>
                </div>
            </div>
        </a>
    )
}