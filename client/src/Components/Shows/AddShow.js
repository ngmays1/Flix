import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar }  from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar }  from '@fortawesome/free-regular-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { createShow, updateShow } from '../../actions/shows';


function AddShow({show, setShowId}) {


    const dispatch = useDispatch();
    const [rating, setRating] = useState(5);
    const [showUpdate, setShowUpdate] = useState({
        title:'',
        genre:'',
        rating:5,
    });

    useEffect(() => {
        if (show) setShowUpdate(show);
        console.log(show);
    }, [show]);

    const {register, handleSubmit, errors } = useForm({
        defaultValues: {title:showUpdate.title}
    });

    const FiveStars = () => { return (
        <span className='mt-1'>
            <FontAwesomeIcon icon={showUpdate.rating >= 1 ? solidStar : emptyStar} onClick={() => setShowUpdate({...showUpdate, rating:1})}/>
            <FontAwesomeIcon icon={showUpdate.rating >= 2 ? solidStar : emptyStar} onClick={() => setShowUpdate({...showUpdate, rating:2})}/>
            <FontAwesomeIcon icon={showUpdate.rating >= 3 ? solidStar : emptyStar} onClick={() => setShowUpdate({...showUpdate, rating:3})}/>
            <FontAwesomeIcon icon={showUpdate.rating >= 4 ? solidStar : emptyStar} onClick={() => setShowUpdate({...showUpdate, rating:4})}/>
            <FontAwesomeIcon icon={showUpdate.rating >= 5 ? solidStar : emptyStar} onClick={() => setShowUpdate({...showUpdate, rating:5})}/>
        </span>
    )}


        //error handling on forms tomorrow
    const onsubmit = (creds) => {
        if (creds.title === '' && creds.genre === '') return
        console.log(creds);
        //console.log(show._id);
        if (show){
            dispatch(updateShow(show._id, {...creds, rating:showUpdate.rating}));
        } else {
            dispatch(createShow({...creds, description:'...', likes:0, tags:["one", "two", "three"], rating:showUpdate.rating}));
        }
        clear();
    }

    const clear = () => {
        setShowId(null);
        setShowUpdate({title:'', genre:''});
    }

    return (
        <div>
            <button onClick={()=>console.log(show)}>show</button>
            {show ? <h1>update show: {show.title}</h1> : <h1>add show</h1> }
            <form onSubmit={handleSubmit(onsubmit)}>
                <input name='title' placeholder='Title' value={showUpdate.title} onChange={(e) => setShowUpdate({...showUpdate, title:e.target.value})} ref={register({required: 'this field is required'})}/>
                <input name='genre' placeholder='Genre' value={showUpdate.genre} onChange={(e) => setShowUpdate({...showUpdate, genre:e.target.value})} ref={register({required: 'this field is required'})}/>
                {/*errors.map((error, index) => {
                    <h5>{error.message}</h5>
                })   */}          
                {errors.title && <h5>{errors.title.message}</h5> }
                {errors.genre && <h5>{errors.genre.message}</h5>
//              <input name='tags' placeholder='' ref={register}/>
}               <FiveStars/>
                <input type='submit'/>   
                <button onClick={clear}>Clear</button>
        </form>
        </div>
    )
}

export default AddShow
