import React, {Fragment, useState, useEffect} from "react";

const FullInfoModule = ({item, isAuth, isCatalog}) => {

    const [show, setShow] = useState('modal-hidden');
    const [isCorrect, setCorrect] = useState(null);
    const [categories, setCategories] = useState([]);

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
                '/dashboard/fav',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json", token: localStorage.token},
                    body: JSON.stringify(body)
                }
            ) 
            const parseRes = await response.json();
            
            if (parseRes === 'Exercise already added to favourites') {
                setCorrect('Упражнение уже добавлено в избранное')
            } else {
                setCorrect('Добавлено в избранное')
            }
        } catch (err) {
            console.error(err.message)
        }
    }

    const deleteExerciseFromFavourite = async(id) => {
        try {
            
            const deleteExercise = await fetch(`/dashboard/fav/${id}`, {
                method: "DELETE",
                headers: {token: localStorage.token}
            });

            window.location.reload();

        } catch (err) {
            console.error(err.message)
        }
    }

    const getCategories = async () => {
        try {
            const response = await fetch(
                '/catalog/category', {
                    method: 'GET',
                    headers: {exercise_id: item.exercise_id}
                }
            )

            const parseRes = await response.json();
            
            setCategories(parseRes)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getCategories();
    }, [])

    return (
        <Fragment>
            <button className='open-modal-btn' onClick={showModal}>Подробнее</button>

            <div className={`modal ${show}`}>
                <div className='modal-header'> 
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>
                
                <div className='modal-content'>
                    <iframe src={item.content} title='exercise' className='modal-exercise'></iframe>
                    <p>{item.description}</p> 
                    <p>Категории:</p>
                    <div className='categories-inline'>
                    {
                        categories.map(function(category) {
                            return (
                                <div className='category-display'>
                                    {category.category_name}
                                </div>
                            )
                        })
                    }
                    </div>
                    {
                        (isAuth && isCatalog) ?
                        <button className='open-modal-btn' onClick={addExerciseToFav}>В Избранное</button> :
                        !isCatalog ? 
                        <button className='open-modal-btn' onClick={() => deleteExerciseFromFavourite(item.exercise_id)}>Удалить</button> : null
                    }
                    {
                        (isCatalog && isCorrect) ?
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