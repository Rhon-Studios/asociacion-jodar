"use client";

import React, { useEffect, useState } from "react";

const ERROR_IMG_SRC = "/catphotos/Cat2.jpg";

export function ImageWithFallBack(
    props: React.ImgHTMLAttributes<HTMLImageElement>
) {
    const [didError, setDidError] = useState(false);

    const { src, alt = "", className, style, ...rest } = props;

    useEffect(() => {
        setDidError(false);
    }, [src]);

    if (didError) {
        return (
            <img
                src={ERROR_IMG_SRC}
                alt="Fallback image"
                className={className}
                style={style}
            />
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            {...rest}
            onError={() => setDidError(true)}
        />
    );
}