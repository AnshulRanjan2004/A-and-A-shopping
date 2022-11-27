import React from "react";
import "./Cards.css"

const Model = props=>{
    return(
        <div className="model_viewer">
            <model-viewer camera-controls src={props.src}
                alt="dress" ar camera-orbit="33deg 67deg auto"
                shadow-intensity="1">
            </model-viewer>
        </div>
        
    );
}

export default Model;