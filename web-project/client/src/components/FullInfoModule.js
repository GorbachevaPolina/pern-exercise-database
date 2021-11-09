import React, {Fragment, useState} from "react";

const FullInfoModule = ({item}) => {

    const [show, setShow] = useState('modal-hidden');

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
    }

    return (
        <Fragment>
            <button className='open-modal-btn' onClick={showModal}>Open</button>

            <div className={`modal ${show}`}>
                <div className='modal-header'> 
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>
                
                <div className='modal-content'>
                    <iframe src={item.content} className='modal-exercise'></iframe>
                    <p>{item.description}</p>
                </div>
            </div>
            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment>
    )
}

export default FullInfoModule;