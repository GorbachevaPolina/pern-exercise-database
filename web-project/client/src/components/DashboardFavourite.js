import React, {useEffect, useState} from "react";

const DashboardFavourite = () => {

    const [dishes, setDishes] = useState([]);


    async function getDishes() {
        try {
            const response = await fetch(
                'http://localhost:5000/dashboard/fav', {
                    method: 'GET',
                    headers: {token: localStorage.token}
                }
            )

            const parseRes = await response.json();
            
            setDishes(parseRes)
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getDishes();
    }, [])

    return (
        <div className='fav-img-container'>
            {dishes.map(function(item) {
                    return (
                        <article className='fav-menu-item'>
                            <div className='img-box'>
                            <img src={item.content} className='fav-img'/>
                            </div>
                            <div className='fav-item-info'>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                            </div>
                        </article>
                    )
                })}
        </div> 
    )
}

export default DashboardFavourite;