import React, {useEffect, useState} from "react";
import FullInfoModule from "./FullInfoModule";

const DashboardFavourite = ({isAuth}) => {

    const [exercises, setExercises] = useState([]);


    async function getExercises() {
        try {
            const response = await fetch(
                'http://localhost:5000/dashboard/fav', {
                    method: 'GET',
                    headers: {token: localStorage.token}
                }
            )

            const parseRes = await response.json();
            
            setExercises(parseRes)
        } catch (err) {
            console.error(err);
        }
    } 

    useEffect(() => {
        getExercises();
    }, [])

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
                                <FullInfoModule item={item} isAuth={isAuth} isCatalog={false}/>
                            </article>
                        )
                    })
                }
        </div> 
    )
}

export default DashboardFavourite;