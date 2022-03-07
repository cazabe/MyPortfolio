import React from "react";
import "./banner.css";

const Banner = ({ video }) => {
    return (
        <>
            <video
                loop
                muted
                autoPlay
                preload="auto"
                style={{ filter: 'brightness(0.6)', width: '100%' }}
            >
                <source src={video} type="video/mp4" />
            </video>
        </>
    )
}

export default Banner;