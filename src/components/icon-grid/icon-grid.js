import React from 'react';

import Grid from '@material-ui/core/Grid';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';


const IconGrid = () => {
    return (
        <Grid container item xs={12}>
            <Grid container item xs={3}>
                <Grid item xs={3}>
                    <FavoriteBorderOutlinedIcon style={{ fontSize: 30 }}/>
                </Grid>
                <Grid item xs={3}>
                    <ChatBubbleOutlineOutlinedIcon style={{ fontSize: 30 }}/>
                </Grid>                    
            </Grid>
            <Grid container justify="flex-end" item xs={9}>
                <TurnedInNotOutlinedIcon style={{ fontSize: 30 }}/>
            </Grid>
        </Grid>
    )
}

export default IconGrid;