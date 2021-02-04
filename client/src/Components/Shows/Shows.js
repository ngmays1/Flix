import React, { useState, useEffect } from 'react';
//import {  Container, Row, Col, Form, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import ShowCard from './ShowCard';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faCaretUp, faCaretDown, faGreaterThan, faLessThan}  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons';
import {useSpring, useTrail, config, animated} from 'react-spring';
import useStyles from './styles';
import { Grid, Link, Table, TableHead, TableRow, TableCell, TableBody, Menu, MenuItem, Button, TextField, Container, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getShows } from '../../actions/shows'


function getGenres(shows)  {
    const genres = [];
    shows.forEach(show => {
            genres.push(show.genre)
        });
    const genreSelectors = [...new Set(genres)];

    const allGenres = genreSelectors;
    const g = [];
    allGenres.forEach((genre) => {
        g.push({genre:genre, selected:false});
    });
    console.log(g);
    return g
}

function Shows() {

    const shows = useSelector((state) => state.shows);
    const classes = useStyles();

    const [genType, setGenType] = useState('All');
    const [rating, setRating] = useState(1);
    const [ascending, setAscending] = useState(true);
    const [alphaUp, setAlphaUp] = useState(false);
    const [ratingUp, setRatingUp] = useState(true);
    const [search, setSearch] = useState('');
    const [alpha, setAlpha] = useState(true);
    //const [anchorEl, setAnchorEl] = useState(null);
    const [genreLinks, setGenreLinks] = useState(getGenres(shows));
    const [tags, setTags] = useState([]);
    //const [openMenu, setOpenMenu] = useState(false);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getShows());
        setGenreLinks(getGenres(shows));
        console.log(getGenres(shows));
    }, [dispatch])


    
    const empt = () => {
        const test = [];
        if(test===null) {
            console.log('not blank')
        }
        else {
            console.log(test);
        }

    }

    const clearAll = () => {
        setGenType('All');
        setSearch('');
        setRating(1);
        setAscending(true);
        setAlphaUp(false);
        setRatingUp(true);
    }

    /*const handleClose = () => {
        setOpenMenu(false);
    }*/

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        ,config: {duration: 1000}
      });

    const flyIn = useSpring({
        from: {opacity: 0, marginTop: -100, marginBottom: 100},
        to: { opacity: 1, marginTop: 0, marginBottom: 0 },
        config: config.slow
    });

    const GenreTicker = () => {
        console.log(genreLinks);
        const genres = [];
        shows.forEach(show => {
                genres.push(show.genre)
            });
        const genreSelectors = [...new Set(genres)];
    
        const allGenres = genreSelectors;
        const g = [];
        allGenres.forEach((genre) => {
            if (!genre){
                console.log('no genre button here');
            }
            else if (genre === genType) {
            g.push({genre:genre, selected:true}) 
            } else {
            g.push({genre:genre, selected:false});
        }
        });

        console.log(genreLinks);
        return (
            <Container className={classes.ticker}>  
                    {g.map((genre, index) => ((!genre.selected) &&
                        <Button key={index} className={classes.tickerbutton} onClick={() => setGenType(genre.genre)} >{genre.genre} </Button>
                    ))}
                    <Button className={classes.tickerbutton} onClick={() => setGenType('All')} > All </Button>
            </Container>
        )
    }

    /*
    const GenreButtons = () => {
        const genres = [];
        shows.forEach(show => {
                genres.push(show.genre)
            });
        const genreSelectors = [...new Set(genres)];
    
        const allGenres = genreSelectors;
        const g = [];
        allGenres.forEach((genre) => {
            g.push({genre:genre, selected:false});
        });

        return (
            <div>
            <Button 
            className={classes.button}
            onClick={() => setOpenMenu(!openMenu)}>
                {genType}
            </Button>
            {openMenu &&
            <Container className={classes.info}>  
                <Grid container className={classes.col}>
                    {g.map((genre, index) => ((!genre.selected) &&
                        <Grid item key={index}>
                        <Link className={classes.desc} onClick={() => setGenre(genre.genre)} >{genre.genre} </Link>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            }       
        </div>
        )
    }
    */

    const addTag = tag => {
        let match = false;
        tags.forEach(prevTag => {
            if (tag === prevTag) {
                match = true;
                }
        });
        if (match === false) {
            setTags(tags => ({...tags, tag}));
        } 
    }
/*
    const removeTags = index => {
        const newTags= [...tags];
        newTags.splice(index, 1);
        setTags(newTags);
    }
    */
    const FilteredTitles = () => {
        const newdisplay = [];
        try {
        shows.forEach(show => {
            if (show.title.toLowerCase().startsWith(search.toLowerCase().slice(0, Math.max(show.title.length - 1, 1)))) {
                if (show.genre === genType || genType === 'All') {
                    if (tags === '')
                    show.tags.forEach(tag => {

                    })
                    if(ascending){
                        if(show.rating >= rating){
                            newdisplay.push(show);
                        }
                    } else {
                        if(show.rating <= rating){
                            newdisplay.push(show);
                        }
                    }
                };       
            }
        }); 
    } catch (error) {
        console.log(error);
    }
        if(alpha){
            if(alphaUp){
                newdisplay.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()
                    ) return 1;
                    else if (a.title.toLowerCase() > b.title.toLowerCase()
                    ) return -1;
                    else { return 0 };
                })}
            else{
                newdisplay.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()
                    ) return -1;
                    else if (a.title.toLowerCase() > b.title.toLowerCase()
                    ) return 1;
                    else { return 0 };
                })}}
        else {
            if(ratingUp){
                newdisplay.sort((a, b) => {
                    if (a.rating < b.rating
                    ) return 1;
                    else if (a.rating > b.rating
                    ) return -1;
                    else { return 0 };
                })}
            else{
                newdisplay.sort((a, b) => {
                    if (a.rating < b.rating
                    ) return -1;
                    else if (a.rating > b.rating
                    ) return 1;
                    else { return 0 };
                })}
            }
        const trail = useTrail(newdisplay.length, {
            from: { opacity: 0 },
            to: { opacity: 1 }
        });
        //console.log(newdisplay);
        return <>
                    {/*trail.map((animation, index) => (
                        <animated.div className='position-relative' style={animation} key={index}>
                            <ShowCard
                                show={newdisplay[index]}>
                            </ShowCard>
                        </animated.div>
                    ))*/}
                    {newdisplay.map((show, index) => (                   
                        <ShowCard
                        key={index}
                        show={show}
                        addTag={addTag}>
                    </ShowCard>
                    ))}
                </>
    }

    const toggleSorts = (name) => {
        console.log(alphaUp, ratingUp);
        console.log(name);
        if (name ==='alpha'){
            setAlphaUp(!alphaUp);
            setAlpha(true);
        }
        else{
            setRatingUp(!ratingUp);
            setAlpha(false);
        }
        console.log(alphaUp, ratingUp);
    }

    const FiveStars = () => { return (
        <span className='mt-1'>
            <FontAwesomeIcon icon={rating >= 1 ? solidStar : emptyStar} onClick={() => setRating(1)}/>
            <FontAwesomeIcon icon={rating >= 2 ? solidStar : emptyStar} onClick={() => setRating(2)}/>
            <FontAwesomeIcon icon={rating >= 3 ? solidStar : emptyStar} onClick={() => setRating(3)}/>
            <FontAwesomeIcon icon={rating >= 4 ? solidStar : emptyStar} onClick={() => setRating(4)}/>
            <FontAwesomeIcon icon={rating >= 5 ? solidStar : emptyStar} onClick={() => setRating(5)}/>
        </span>
    )}

    const setGenre = (selected) => {
        setGenType(selected);
        const genres = [];
        genreLinks.forEach((item) =>  {
            console.log(item);
            if(item.genre === selected){
                genres.push({genre:item.genre, selected:true});
                console.log(item.genre);
            }
            else{
                genres.push({genre:item.genre, selected:false});
                console.log(item);
            }
        });
        console.log(genreLinks);
        console.log(genres);
        console.log(selected);
        setGenreLinks(genres);
        //handleClose();
    }

    return (
            <Container>
                <GenreTicker/>        
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.cell}>
                                <Grid container>
                                <Grid item>
                                    <FontAwesomeIcon className={classes.corner} onClick={() => toggleSorts('alpha')} icon={alphaUp ? faCaretUp : faCaretDown} />
                                        <Typography variant='h5'>Title:  </Typography>
                                        </Grid>
                                        <Grid item className={classes.spaceRight}>
                                            <TextField className={classes.search} id='search-bar' type='text' name='title' value={search} placeholder='Search:' onChange={e => setSearch(e.target.value)}/>
                                        </Grid>
                                </Grid>
                                </TableCell>
                            <TableCell className={classes.cell}>
                            <Grid container>
                                <Grid item>
                                    <Typography variant='h5'>{genType}</Typography>
                                </Grid>
                                <Grid item className={classes.spaceRight}>
                                    {/*<GenreButtons/>*/}
                                </Grid>
                            </Grid>
                                </TableCell>
                            <TableCell className={classes.cell}>
                                    <Typography variant='h5'>Rating</Typography>
                                        <FiveStars/>
                                        <FontAwesomeIcon className={classes.spaceLeft} onClick={() => setAscending(!ascending)} icon={ascending ? faGreaterThan : faLessThan}/>
                                        <FontAwesomeIcon className={classes.corner} onClick={() => toggleSorts('rating')} icon={ratingUp ? faCaretUp : faCaretDown} />
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <FilteredTitles/>
                    </TableBody>
                </Table>
                <Button className={classes.centerButton} onClick={() => clearAll()}>Clear</Button>
                {tags.map((tag, index) => (
                    <Typography variant='p' key={index}>{index} </Typography> 
                ))}
                </Container>
    )
}

export default Shows