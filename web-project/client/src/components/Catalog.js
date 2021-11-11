import React, {useEffect, useState, Fragment} from "react";
import Header from "./Header";
import FullInfoModule from "./FullInfoModule";
import CategoryModal from "./CategoryModal";

const Catalog = ({isAuth, setAuth}) => {

    const [exercises, setExercises] = useState([]);
    const [categories, setCategories] = useState([]);

    async function getCategories() {
        try {
            const categories = await fetch(
                'http://localhost:5000/catalog/categories', {
                    method: 'GET'
                }
            )

            const parseRes = await categories.json();

            setCategories(parseRes);
        } catch (err) {
            console.error(err);
        }
    }


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
        getCategories();
    }, [])


    return (
        <div className='catalog-container'>
            <Header isAuth={isAuth} setAuth={setAuth}/>
            <h1>Catalog</h1>
            <div className='category-container'>
                {/* {
                    category_groups.map(function(category_item) {
                        return (
                        <button className='category-group'>
                            {category_item.category_group}
                        </button>
                        )
                    })
                } */}
                <CategoryModal categories={categories}/>
            </div>
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
        </div>
    )
}

export default Catalog;