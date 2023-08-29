import React from 'react';
import './Video.css';
import Avatar from "@material-ui/core/Avatar";

function Video({image,title,channel,timestamp,channelImage,videoI,views}) {
    return (
        <div className="videoCard">
            <img src={image} alt="" className="video__thumbnail"/>
            <div className="video__info">
                <Avatar className="videoCard__avatar" alt={channel} src={channelImage}/>
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} . {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
