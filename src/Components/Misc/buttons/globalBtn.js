import React from "react";

const GlobalBtn = ({ url, text, btnWidth, customFont }) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <div className="mb-4 my-button col-md-3 col-xs-12" style={btnWidth ? { width: btnWidth, fontSize: customFont } : null}>
                <strong>{text}</strong>
            </div>
        </a>
    )
}

export default GlobalBtn;