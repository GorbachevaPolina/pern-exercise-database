import React, {Fragment, useState, useEffect} from "react";

const CategoryModal = ({categories1, categories2, categories3}) => {

    const [show, setShow] = useState('modal-hidden');
    // const [isChosen, setChosen] = useState('')

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
    }

    // function chooseCategory() {
    //     setChosen('chosen');
    // }

    return (
        <Fragment>
            <button className='category-group' onClick={showModal}>Sort</button>

            <div className={`modal ${show}`}>
                <div className='modal-header'> 
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>

                <div className='modal-content'>
                    <p className='modal-p'>Click categories you'd like to choose: </p>
                    <div className='categories-inline-modal'>
                        <div className='categories'>
                            <p>Type:</p>
                        {
                            categories1.map(function(category) {
                                return (
                                    <div className='single-category'>
                                        {category.category_name}
                                    </div>
                                )
                            })
                        }
                        </div>

                        <div className='categories'>
                        <p>Muscle group: </p>
                        {
                            categories2.map(function(category) {
                                return (
                                    <div className='single-category'>
                                        {category.category_name}
                                    </div>
                                )
                            })
                        }
                        </div>

                        <div className='categories'>
                        <p>Equipment:</p>
                        {
                            categories3.map(function(category) {
                                return (
                                    <div className='single-category'>
                                        {category.category_name}
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment>
    )
}

export default CategoryModal;