import React, {Fragment, useState} from "react";

const CategoryModal = ({categories, setChosen, chosen}) => {

    const [show, setShow] = useState('modal-hidden');
    // const [chosen, setChosen] = useState([])

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
    }

    function addCategory(e) {
        setChosen([...chosen, e.currentTarget.id])
    }

    function removeCategory(e) {
        setChosen(chosen.filter(function(item) {
            return item !== e.currentTarget.parentNode.firstChild.id
        }))
    }

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
                            categories.map(function(category) {
                                if (category.category_group === 'type')
                                    return (
                                        <div id={category.category_name} key={category.category_id} className='single-category' onClick={addCategory}>
                                            {category.category_name}
                                        </div>
                                    )
                            })
                        }
                        </div>

                        <div className='categories'>
                        <p>Muscle group: </p>
                        {
                            categories.map(function(category) {
                                if (category.category_group === 'muscle group')
                                    return (
                                        <div id={category.category_name} key={category.category_id} className='single-category' onClick={addCategory}>
                                            {category.category_name}
                                        </div>
                                    )
                            })
                        }
                        </div>

                        <div className='categories'>
                        <p>Equipment:</p>
                        {
                            categories.map(function(category) {
                                if (category.category_group === 'equipment')
                                    return (
                                        <div id={category.category_name} key={category.category_id} className='single-category' onClick={addCategory}>
                                            {category.category_name}
                                        </div>
                                    )
                            })
                        }
                        </div>
                    </div>

                    <div className='chosen-categories'>
                        <p>Chosen categories: </p>
                        {
                            chosen.filter(function onlyUnique(value, index, self) {
                                    return self.indexOf(value) === index;
                                  }).map(function(item) {
                                return (
                                    <div>
                                        <span id={item}>{item}</span>
                                        <button type="button" className="close" onClick={removeCategory}>&times;</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment>
    )
}

export default CategoryModal;