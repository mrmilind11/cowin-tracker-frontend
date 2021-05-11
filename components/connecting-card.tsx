import { CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    emptyBox: {
        padding: 32,
        minWidth: 300,
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '95%'
        }
    },
    flexCenter: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pad16: {
        padding: 16
    }
}))

const ConnectingCard = () => {
    const styles = useStyles();
    return (
        <div className={`${styles.flexCenter} ${styles.pad16}`}>
            <Paper elevation={3} className={`${styles.emptyBox} ${styles.flexCenter}`}>
                <div className={styles.pad16}>
                    <CircularProgress />
                </div>
                <Typography variant="h6" color="textPrimary">Connecting to server</Typography>
                <Typography variant="subtitle1">Please wait while we connect to server.</Typography>
            </Paper>
        </div>
    )
}

export default ConnectingCard;