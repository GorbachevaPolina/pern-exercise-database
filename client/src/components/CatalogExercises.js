import React, {useState, useEffect} from "react";
import FullInfoModule from "./FullInfoModule";

const CatalogExercises = ({isAuth, setAuth, categories, chosen}) => {
    const [exercises, setExercises] = useState([]);

    async function getExercises() {
        try {
            if (categories.length !== 0) {
            if(chosen.length === 0) {
                const encoded_categories = categories.map(item => ({...item}));
                encoded_categories.forEach(item => item.category_name = encodeURI(item.category_name))
                const response = await fetch(
                    '/catalog/', {
                        method: 'GET',
                        headers: {categories: JSON.stringify(encoded_categories)}
                    }
                )

                const parseRes = await response.json();
                console.log(parseRes);
                
                setExercises(parseRes)
            } else {
                var encoded_chosen = chosen.map(item => item);
                encoded_chosen = encodeURI(encoded_chosen).split(',')
                const response = await fetch(
                    '/catalog/chosen', {
                        method: 'GET',
                        headers: {chosen: JSON.stringify(encoded_chosen)}
                    }
                )

                const parseRes = await response.json();

                setExercises(parseRes);
            }
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
                                src={'https://img.youtube.com/vi/' + item.content.slice(-11) + '/maxresdefault.jpg'} alt='thumbnail' className='fav-img'/>
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