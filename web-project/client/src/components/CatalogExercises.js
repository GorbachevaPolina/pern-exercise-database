import React, {useState, useEffect} from "react";
import FullInfoModule from "./FullInfoModule";

const CatalogExercises = ({isAuth, setAuth, categories, chosen}) => {
    const [exercises, setExercises] = useState([]);

    async function getExercises() {
        try {
            if(chosen.length === 0) {
                const response = await fetch(
                    'http://localhost:5000/catalog/', {
                        method: 'GET',
                        headers: {categories: JSON.stringify(categories)}
                    }
                )

                const parseRes = await response.json();
                
                setExercises(parseRes)
            } else {
                const response = await fetch(
                    'http://localhost:5000/catalog/chosen', {
                        method: 'GET',
                        headers: {chosen: JSON.stringify(chosen)}
                    }
                )

                const parseRes = await response.json();

                setExercises(parseRes);
            }
        } catch (err) {
            console.error(err);
        }
    } 


    useEffect(() => {
        getExercises();
    }, [categories, chosen])

    return (
        <div className='fav-img-container'>
                {exercises.map(function(item) {
                        return (
                            <article className='fav-item' key={item.exercise_id}>
                                <div className='img-box'>
                                <img
                                src={'https://img.youtube.com/vi/' + item.content.slice(-11) + '/maxresdefault.jpg'}  className='fav-img'/>
                                </div>
                                <div className='fav-item-info'>
                                    <h4>{item.name}</h4>
                                </div>
                                <FullInfoModule item={item} isAuth={isAuth} isCatalog={true}/>
                            </article>
                        )
                    })
                }
            </div> 
    )
}

export default CatalogExercises