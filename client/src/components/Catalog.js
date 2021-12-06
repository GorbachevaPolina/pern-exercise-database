import React, {useEffect, useState} from "react";
import Header from "./Header";
import CategoryModal from "./CategoryModal";
import CatalogExercises from "./CatalogExercises";
import AddExercise from "./AddExercise";

const Catalog = ({isAuth, setAuth}) => {

    const [categories, setCategories] = useState([]);
    const [chosen, setChosen] = useState([])
    const [role, setRole] = useState('')

    async function getCategories() {
        try {
            const categories = await fetch(
                '/catalog/categories', {
                    method: 'GET'
                }
            )

            const parseRes = await categories.json();

    
            setCategories(parseRes);
        } catch (err) {
            console.error(err);
        }
    }

    async function getRole() {
        try {
            const response = await fetch(
                '/dashboard', {
                    method: 'GET',
                    headers: {token: localStorage.token}
                }
            ) 

            const parseRes = await response.json();

            setRole(parseRes.role)
        } catch (err) {
            console.error(err);
        }
    }
    

    useEffect(() => {
        getCategories();
        if(isAuth)
            getRole();
    }, [isAuth])


    return (
        <div className='catalog-container'>
            <Header isAuth={isAuth} setAuth={setAuth}/>
            <h1>Каталог</h1>
            <div className='category-container'>
                <CategoryModal categories={categories} setChosen={setChosen} chosen={chosen}/>

            </div>
            {
                role === 'admin' ?
                <AddExercise /> :
                null
            }
            <CatalogExercises isAuth={isAuth} setAuth={setAuth} categories={categories} chosen={chosen}/>
            
        </div>
    )
}

export default Catalog;