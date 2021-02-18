import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar }  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar }  from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { createShow } from '../../actions/shows';


function AddShow() {


    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [genre, setGenre]  = useState('');
    const [tags, setTags] = useState(['']); 
    const [rating, setRating] = useState(5);

    const {register, handleSubmit, errors } = useForm();

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
        dispatch(createShow({...creds, description:'...', likes:0, tags:["one", "two", "three"], rating:3}));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <input name='title' placeholder='Title' onChange={(e) => setTitle(e.target.value)} ref={register}/>
                <input name='genre' placeholder='Genre' onChange={(e) => setGenre(e.target.value)} ref={register}/>
{//                <FiveStars/>
//                <input name='tags' placeholder='' ref={register}/>
}               <input type='submit'/>     
        </form>
        </div>
    )
}

export default AddShow
