"use client";

import React, {ComponentProps, ReactNode} from "react";
import styled from "styled-components";
import {useRouter} from "next/navigation";
import * as url from "node:url";

interface AnimalProps {
    id: number;
    name: string;
    description: string;
    isDisponible: boolean;
    images: string[];
    children?: React.ReactNode;
}

const AnimalCarouselCard = ({
                                id,
                                name,
                                description,
                                isDisponible,
                                children,
                                images
                            }: AnimalProps) => {
    const router = useRouter();
    return (
        <StyledWrapper $backgroundUrl={images}>
            <div className="col-6 col-md-2">
                <div className="card">
                    <div className="card-description">
                        <div className="title-row">
                            <div className="circle">
                                <span className={`${isDisponible ? 'disponible':'nodisponible'} box`}></span>
                            </div>
                            <p className="text-title">{name || "Gatito" }</p>
                        </div>
                        <p className="text-body">{description || "Hola soy un gato" }</p>
                    </div>
                    <button
                        className="card-button"
                        onClick={() => router.push(`/cats/${id}`)}
                    >
                    Saber Más
                    </button>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`

    .card-description,
    .card-button,
    .title-row,
    .text-title,
    .text-body {
        position: relative;
        z-index: 1;
    }
    
    .card {
        width: 300px;
        border-radius: 20px;
        background: transparent;
        position: relative;
        padding: 1rem;
        border: 3px solid #805BA6;
        transition: 0.5s ease-out;
        overflow: visible;
        aspect-ratio: 1;
        box-sizing: border-box;
    }
    
    .card::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${({ $backgroundUrl }) => {
            return $backgroundUrl
                    ? `url(${$backgroundUrl}) center/cover no-repeat`
                    : `#f5f5f5`;
        }};
        z-index: 0;
        filter: grayscale(0%);
        transition: filter 0.3s ease-out;
        border-radius: 17px;
        overflow: hidden;
    }
    
    @media (max-width: 1024px) {
        .card {
            width: 200px;
        }
    }

    @media (max-width: 768px) {
        .card {
            width: 160px;
        }
    }

    @media (max-width: 480px) {
        .card {
            width: 160px    ;
        }
    }
    @media (max-width: 420px) {
        .card {
            width: 120px    ;
        }
    }
    
    .card-description {
        display: flex;
        flex-direction: column;
        height: 100%;
        color: black;
        padding: 0.25rem;
    }
    
    .title-row {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        place-content: flex-start;
    }

    .text-title {
        font-size: 1em;
        font-weight: bold;
        align-items: flex-start;
    }

    .box {
        display: inline-block;
        align-items: center;
        width: 20px;
        height: 20px;
        padding: 1px;
        border-radius: 50%;
    }

    .circle {
        padding: 0 10px;
        display: flex;
        align-items: center;
    }

    .disponible {
        background-color: #00ca4e;
    }
    
    .nodisponible {
        background-color: #f44336;
    }

    .text-body {
        flex: 1;               
        display: flex;            
        justify-content: center;   
        align-items: center;       
        color: black;
        margin: 0;
        text-align: center;
        opacity: 0;
        transform: translateY(10px);
        transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    }
    
    .card-button {
        transform: translate(-50%, 125%);
        width: 60%;
        border-radius: 1rem;
        border: none;
        background-color: #805BA6;
        color: #fff;
        font-size: 1rem;
        padding: .5rem 1rem;
        position: absolute;
        left: 50%;
        bottom: 0;
        opacity: 0;
        transition: 0.3s ease-out;
    }
    
    .card:hover {
        border-color: #805BA6;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px,
        rgba(128, 91, 166, 0.5) 5px 10px 15px;
    }

    .card:hover::before {
        filter: blur(2px) grayscale(20%);
        overflow: hidden;
    }
    
    .card:hover .card-button {
        transform: translate(-50%, 50%);
        opacity: 1;
    }
    
    .card:hover .text-body {
        opacity: 1;
        transform: translateY(0);
    }
    
    `;

export default AnimalCarouselCard;
