import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar }  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar }  from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { createShow, updateShow } from '../../actions/shows';


function AddShow(showId, setShowId) {


    const dispatch = useDispatch();
    const [rating, setRating] = useState(5);
    const [showUpdate, setShowUpdate] = useState({
        title:'',
        genre:''
    });

    useEffect(() => {
        console.log(showId)
    }, [showId]);

    const {register, handleSubmit, errors } = useForm({
        defaultValues: {title:showUpdate.title}
    });

    const FiveStars = () => { return (
        <span className='mt-1'>
            <FontAwesomeIcon icon={rating >= 1 ? solidStar : emptyStar} onClick={() => setRating(1)}/>
            <FontAwesomeIcon icon={rating >= 2 ? solidStar : emptyStar} onClick={() => setRating(2)}/>
            <FontAwesomeIcon icon={rating >= 3 ? solidStar : emptyStar} onClick={() => setRating(3)}/>
            <FontAwesomeIcon icon={rating >= 4 ? solidStar : emptyStar} onClick={() => setRating(4)}/>
            <FontAwesomeIcon icon={rating >= 5 ? solidStar : emptyStar} onClick={() => setRating(5)}/>
        </span>
    )}

    const onsubmit = (creds) => {
        console.log(creds);
        console.log(showId.showId);
        if (showId.showId){
            dispatch(updateShow(showId.showId, creds));
        } else {
            dispatch(createShow({...creds, description:'...', likes:0, tags:["one", "two", "three"], rating:3}));
        }
    }

    return (
        <div>
            {showId.showId ? <h1>update show: </h1> : <h1>add show</h1> }
            <form onSubmit={handleSubmit(onsubmit)}>
                <input name='title' placeholder='Title' onChange={(e) => setShowUpdate({...showUpdate, title:e.target.value})} ref={register}/>
                <input name='genre' placeholder='Genre' onChange={(e) => setShowUpdate({...showUpdate, genre:e.target.value})} ref={register}/>
{//                <FiveStars/>
//                <input name='tags' placeholder='' ref={register}/>
}               <input type='submit'/>   
        </form>
        </div>
    )
}

export default AddShow
