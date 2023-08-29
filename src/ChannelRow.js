import React from 'react';
import './ChannelRow.css';
import Avatar from "@material-ui/core/Avatar";
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Button } from '@material-ui/core';

function ChannelRow({image,channel,subs,noOfVideos,verified,description}) {
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleOutlineOutlined/>}</h4>
                <p>{subs} subscribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
            <div className="channelRow__right">
            <Button className="channelRow__btn">Subscribe</Button>
            <NotificationsIcon/>
            </div>
        </div>
    )
}

export default ChannelRow
