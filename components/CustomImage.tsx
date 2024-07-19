"use client";

import { useState } from "react";
import Image from "next/image";

export interface CustomImageProps {
    src: string;
    alt: string;
    fill?: boolean;
    priority?: boolean;
    className?: string;
    objectFit?: "cover" | "contain" | "fill";
}

const CustomImage = ({ src, alt, fill, priority, className, objectFit }: CustomImageProps) => {
    // const [error, setError] = useState(false);
    const [imgSrc, setImgSrc] = useState(src);

    const handleImageError = () => {
        console.log("Error loading image");
        setImgSrc('/assets/images/emptyframe.png');
    };

    return (
        <>
            <Image
                src={src}
                alt={alt}
                fill={fill}
                priority={priority}
                className={className}
                style={{objectFit:"cover"}}
                onError={handleImageError} 
            />
        </>
    );
};

export default CustomImage;
