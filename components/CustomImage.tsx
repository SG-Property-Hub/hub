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
    const [error, setError] = useState(false);

    const handleImageError = () => {
        console.log("Error loading image");
    };

    return (
        <>
            {!error ? (
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    priority={priority}
                    className={className}
                    objectFit={objectFit}
                    onError={handleImageError} // Xử lý sự kiện khi ảnh gặp lỗi
                />
            ) : (
                    <Image
                        src='/assets/images/emptyframe.png'
                        alt={alt}
                        fill={fill}
                        priority={priority}
                        className={className}
                        objectFit={objectFit}
                        onError={handleImageError} // Xử lý sự kiện khi ảnh gặp lỗi
                    />
            )}
        </>
    );
};

export default CustomImage;
