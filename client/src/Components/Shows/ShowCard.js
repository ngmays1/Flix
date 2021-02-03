import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar}  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons';
import { Grid, Link, TableRow, TableCell, Typography, Button, Box, Container } from '@material-ui/core';
import useStyles from './styles';


function ShowCard({ show, addTag }) {
    const classes = useStyles();

    const [showTags, setShowTags] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    return (
        <TableRow>
            <TableCell className={classes.cell} align='left'>
                <Typography onClick={() => setShowInfo(!showInfo)} variant='h6'>{show.title}</Typography>
                {showInfo &&
                    <Container className={classes.description__box}>
                        <Grid container className={classes.col}>
                            <Grid item>
                                <Link className={classes.desc} target="_blank" rel="noopener noreferrer" href={show.link}>
                                    {'Trailer'}
                                </Link> 
                            </Grid>
                            <Grid item>
                                <Typography variant='body2' className={classes.desc}>
                                    {"Description:  "+show.description.substring(0, 65) +'...'}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                }
                <Button onClick={() => setShowTags(!showTags)} className={classes.tags}> + </Button>
                {showTags && 
                    <div className={classes.row}>
                        {show.tags.map((tag, index) => (
                            <Typography key={index} onClick={() => addTag(tag)} variant='body2'> #{ tag } </Typography>
                        ))}    
                    </div>}
            </TableCell>
            <TableCell className={classes.cell} align='left'>
                <Typography variant='subtitle1'>{show.genre}</Typography>
            </TableCell >
            <TableCell className={classes.cell} align='justify'>
                    <FontAwesomeIcon icon={show.rating >= 1 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 2 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 3 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 4 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 5 ? solidStar : emptyStar}/>
            </TableCell>
        </TableRow>
    )
}

export default ShowCard