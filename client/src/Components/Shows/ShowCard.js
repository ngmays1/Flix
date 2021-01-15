import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar}  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons';
import { Grid,TableRow, TableCell } from '@material-ui/core';
import useStyles from './styles';


function ShowCard({show}) {
    const classes = useStyles();
    return (
        <TableRow >
            <TableCell className={classes.cell} align='left'>
                {show.title}
            </TableCell>
            <TableCell className={classes.cell} align='left'>
                {show.genre}
            </TableCell >
            <TableCell className={classes.cell} align='justify'>
                <Grid item>
                    <FontAwesomeIcon icon={show.rating >= 1 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 2 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 3 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 4 ? solidStar : emptyStar}/>
                    <FontAwesomeIcon icon={show.rating >= 5 ? solidStar : emptyStar}/>
                </Grid>
            </TableCell>
        </TableRow>
    )
}

export default ShowCard