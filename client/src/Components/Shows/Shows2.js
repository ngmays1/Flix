import React, {useState, useEffect} from 'react';
import {  Container, Row, Col, Form, Dropdown, DropdownButton, Button, InputGroup } from 'react-bootstrap';
import ShowCard from './ShowCard';
import { useSelector } from 'react-redux';
//import directoryData from '../data/projectData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar, faCaretUp, faCaretDown, faGreaterThan, faLessThan}  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar}  from '@fortawesome/free-regular-svg-icons';
import {useSpring, useTrail, config, animated} from 'react-spring';



function Shows() {

    //next up >>> add more data to have multiple pages for results
    //allow users to flip through if there's 10+
    // make titles clickable to get more info... maybe use popup/ alerts

    //for weather, make temp universal
    //restyle w/ bootstrap
    //see if you can figure out the country code thing

    const shows = useSelector((state) => state.shows);

    const [genType, setGenType] = useState('All');
    const [rating, setRating] = useState(1);
    const [ascending, setAscending] = useState(true);
    const [alphaUp, setAlphaUp] = useState(false);
    const [ratingUp, setRatingUp] = useState(true);
    const [search, setSearch] = useState('');
    const [alpha, setAlpha] = useState(true);

    useEffect(() => {
        console.log(genType);
        console.log(search);
        console.log(rating);
        console.log(ascending ? 'Ascending' : 'Descending');
    }, [genType, search, rating, ascending]);

    const clearAll = () => {
        setGenType('All');
        setSearch('');
        setRating(1);
        setAscending(true);
        setAlphaUp(false);
        setRatingUp(true);
    }
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
        ,config: {duration: 1000}
      });

    const flyIn = useSpring({
        from: {opacity: 0, marginTop: -100, marginBottom: 100},
        to: { opacity: 1, marginTop: 0, marginBottom: 0 },
        config: config.slow
    })

    const FilteredTitles = () => {
        const newdisplay = [];
        shows.forEach(show => {
            if (show.title.toLowerCase().startsWith(search.toLowerCase().slice(0, Math.max(show.title.length - 1, 1)))) {
                if (show.genre === genType || genType === 'All') {
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
        console.log(newdisplay);
        return <Col>
                    {trail.map((animation, index) => (
                        <animated.div style={animation} key={index}>
                            <ShowCard
                                show={newdisplay[index]}>
                            </ShowCard>
                        </animated.div>
                    ))}
                </Col>
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

    const genres = [];
    shows.forEach(show => {
            genres.push(show.genre)
        });
    const genreSelectors = [...new Set(genres)];

    const allGenres = genreSelectors;
    //allGenres.push('All');
    const g = [];
    allGenres.forEach((genre) => {
        g.push({genre:genre, selected:false});
    });
    const [genreLinks, setGenreLinks] = useState(g);

    
  
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
                //item.selected=true;
            }
            else{
                genres.push({genre:item.genre, selected:false});
                console.log(item);
            }
        });
        console.log(genres);
        console.log(selected);
        setGenreLinks(genres);
    }

    return (
        <div>
            <Container className='mb-3'>
                <animated.div style={flyIn}>
                    <Row className='justify-content-md-center m-3'>
                        <InputGroup className='w-25'>
                        <Form.Control className='m-1' size='sm' type='text' name='title' value={search} placeholder='Search:' onChange={e => setSearch(e.target.value)}/>
                            <InputGroup.Append>
                            <Button variant='secondary' onClick={() => clearAll()}>Clear</Button>
                            </InputGroup.Append>
                            </InputGroup>
                    </Row>
                </animated.div>
                <Container>
                <animated.div className='position-relative' style={fadeIn}>

                    <Row>
                        <Col className="rounded mb-0 block-example border border-dark">
                            <FontAwesomeIcon className='corner-caret' onClick={() => toggleSorts('alpha')} icon={alphaUp ? faCaretUp : faCaretDown} />
                            <Row className='m-3 justify-content-md-center'>
                                <h5>Title</h5>
                            </Row>
                        </Col>
                        <Col className="rounded mb-0 block-example border border-dark">
                            <Row className='m-1 justify-content-md-center'>
                                <h5>Genre</h5>
                            </Row>
                                <DropdownButton
                                    variant='secondary'
                                    className='m-1'
                                    title={genType}
                                    >
                                    {genreLinks.map((genre, index) => ((!genre.selected) &&
                                        <Dropdown.Item key={index} className='text-light bg-secondary' onSelect={() => setGenre(genre.genre)} name={genre.genre} value={genre.genre}>{genre.genre}</Dropdown.Item>
                                ))}
                            </DropdownButton>
                            
                        </Col>
                        <Col className="rounded mb-0 block-example border border-dark">
                            <Row className='m-1 justify-content-md-center'>
                                <h5>Rating</h5>
                                </Row>
                                <Row className='m-1 ml-4 justify-content-md-center'>
                                    <FiveStars/>
                                    <FontAwesomeIcon className='m-2' onClick={() => setAscending(!ascending)} icon={ascending ? faGreaterThan : faLessThan}/>
                                    <FontAwesomeIcon className='corner-caret' onClick={() => toggleSorts('rating')} icon={ratingUp ? faCaretUp : faCaretDown} />
                                
                            </Row>
                        </Col>
                    </Row>
                    </animated.div>

                    <Row>
                        <FilteredTitles/>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default Shows