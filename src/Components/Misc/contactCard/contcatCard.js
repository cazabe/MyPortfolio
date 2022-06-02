import React from "react";

const ReusableCard = ({ icon, text }) => {
    return (
        <>
            <div className="center-info">
                <img src={icon} alt="contact icon" className="icons" />
                <p className="text-center">{text}</p>
            </div>
        </>
    )
}
export default ReusableCard