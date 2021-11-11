import React, {Fragment, useState, useEffect} from "react";

const CategoryModal = ({categories}) => {

    const [show, setShow] = useState('modal-hidden');
    // const [categories, setCategories] = useState([]);
    // let tmp = []

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
    }

    // async function getCategories(category_group) {
    //     try {
    //         const response = await fetch(
    //             'http://localhost:5000/catalog/category', {
    //                 method: 'GET',
    //                 headers: {category_group: category_group}
    //             }
    //         )
            
    //         const parseRes = await response.json();
            
    //         return parseRes
            
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }

    // useEffect(() => {
    //     (async () => {
    //         let tmp = []
    //         for (let i = 0; i < category_groups.length; ++i) 
    //             tmp.push(await getCategories(category_groups[i].category_group))
    //         console.log(tmp)
    //     })()
        
    // }, [])

    return (
        <Fragment>
            <button className='category-group' onClick={showModal}>Sort</button>

            <div className={`modal ${show}`}>
                <div className='modal-header'> 
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>

                <div className='modal-content'>
                    {
                        categories.map(function(category) {
                            return (
                                <div>
                                    {category.category_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment>
    )
}

export default CategoryModal;