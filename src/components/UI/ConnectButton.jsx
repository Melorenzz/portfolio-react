import React from 'react'

export default function ConnectButton({link, icon, title, description}) {
    return (
        <a data-aos="fade-up" className="link" href={link}>
            <img src={icon} alt='иконка' />
            <div className="text">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </a>
    )
}