import React, {useEffect, useState} from "react";
import Header from "./Header";

const Catalog = ({isAuth, setAuth}) => {

    const [exercises, setExercises] = useState([]);


    async function getExercises() {
        try {
            const response = await fetch(
                'http://localhost:5000/catalog/', {
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
        <div className='catalog-container'>
            <Header isAuth={isAuth} setAuth={setAuth}/>
            <h1>Catalog</h1>
            <div className='fav-img-container'>
                {exercises.map(function(item) {
                        return (
                            <article className='fav-menu-item'>
                                <div className='img-box'>
                                <img
                                src={'https://img.youtube.com/vi/' + item.content.slice(-11) + '/maxresdefault.jpg'}  className='fav-img'/>
                                </div>
                                <div className='fav-item-info'>
                                    <h4>{item.name}</h4>
                                </div>
                            </article>
                        )
                    })
                }
            </div> 
        </div>
    )
}

export default Catalog;