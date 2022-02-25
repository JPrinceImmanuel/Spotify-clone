import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import {Grid, Slider} from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer(){
    return(
        <div className="footer">
            <div className="footer_left">
                <img className="footer_albumLogo" src="https://m.media-amazon.com/images/I/61adGvsFoyL._SS500_.jpg" alt=""/>
                <div className="footer_songInfo">
                    <h4>yeah!</h4>
                    <p>balls</p>
                </div>

            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer__green"/>
                <SkipPreviousIcon className="footer__icon"/>
                <PlayCircleFilledIcon fontSize="large" className="footer__icon"/> 
                <SkipNextIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>

            </div>
            <div className="footer_right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider/>
                    </Grid>
                </Grid>
              
            </div>
        </div>
    )
}


export default Footer;