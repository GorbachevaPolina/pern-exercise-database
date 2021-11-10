import React, {Fragment, useState} from "react";

const FullInfoModule = ({item, isAuth, isCatalog}) => {

    const [show, setShow] = useState('modal-hidden');
    const [isCorrect, setCorrect] = useState(null);

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
    }

    const exercise_id = item.exercise_id;

    const addExerciseToFav = async () => {
        try {
            const body = {exercise_id};

            const response = await fetch(
                'http://localhost:5000/dashboard/fav',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json", token: localStorage.token},
                    body: JSON.stringify(body)
                }
            ) 
            const parseRes = await response.json();
            
            if (parseRes === 'Exercise already added to favourites') {
                setCorrect('Exercise already added to favourites')
            } else {
                setCorrect('Added to favourites')
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteExerciseFromFavourite = async(id) => {
        try {
            
            const deleteExercise = await fetch(`http://localhost:5000/dashboard/fav/${id}`, {
                method: "DELETE",
                headers: {token: localStorage.token}
            });

            window.location.reload();

        } catch (err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <button className='open-modal-btn' onClick={showModal}>Open</button>

            <div className={`modal ${show}`}>
                <div className='modal-header'> 
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>
                
                <div className='modal-content'>
                    <iframe src={item.content} className='modal-exercise'></iframe>
                    <p>{item.description}</p>
                    {
                        (isAuth && isCatalog) ?
                        <button className='open-modal-btn' onClick={addExerciseToFav}>Add to Favourites</button> :
                        !isCatalog ? 
                        <button className='open-modal-btn' onClick={() => deleteExerciseFromFavourite(item.exercise_id)}>Delete</button> : null
                    }
                    {
                        isCatalog ?
                        <p className='middle'>{isCorrect}</p> :
                        null
                    }
                </div>
            </div>
            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment>
    )
}

export default FullInfoModule;