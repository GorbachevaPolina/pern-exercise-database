import React, {Fragment, useState} from "react";

const AddExercise = () => {

    const [show, setShow] = useState('modal-hidden');
    const [inputs, setInputs] = useState({
        content: '',
        name: '',
        description: '',
        type: '',
        muscle: '',
        equipment: ''
    })

    const {content, name, description, type, muscle, equipment} = inputs;

    const onChange = (e) => {
        setInputs({...inputs, [e.target.name] : e.target.value})
    }

    function showModal() {
        setShow('modal-show');
    }

    function hideModal() {
        setShow('modal-hidden');
        setInputs({
            content: '',
            name: '',
            description: '',
            type: '',
            muscle: '',
            equipment: ''
        })
    }

    const onSubmitForm = async (e) => {
        e.preventDefault(); 
        if (content === '' || name === '' || description === '' || type === '' || muscle === '' || equipment === '') {
            hideModal();
            return;
        }
        try {
            const body = {content, name, description, type, muscle, equipment}
            const response = await fetch(
                '/catalog/add',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json", token: localStorage.token},
                    body: JSON.stringify(body)
                }
            ) 

            window.location.reload();
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button className='add-catalog-btn' onClick={showModal}>Добавить упражнение</button>

            <div className={`modal ${show} add-modal`}>
                <div className='modal-header'> 
                    <h4 className="modal-title">Добавление упражнения</h4>
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>

                <div className='modal-content'>
                    <form className='w-100' onSubmit={onSubmitForm}>
                        <p>Ссылка на видео: </p>
                        <input type='text' className='form-control' name='content' placeholder='link' value={content} onChange={e => onChange(e)} />

                        <p>Название видео: </p>
                        <input type='text' className='form-control' name='name' placeholder='name' value={name} onChange={e => onChange(e)} />

                        <p>Описание тренировки: </p>
                        <input type='text' className='form-control' name='description' placeholder='description' value={description} onChange={e => onChange(e)} />

                        <h4>Категории</h4>
                        <p>Тип: </p>
                        <input type='text' className='form-control' name='type' placeholder='type' value={type} onChange={e => onChange(e)} />

                        <p>Группа мышц: </p>
                        <input type='text' className='form-control' name='muscle' placeholder='muscle group' value={muscle} onChange={e => onChange(e)} />

                        <p>Оборудование: </p>
                        <input type='text' className='form-control' name='equipment' placeholder='equipment' value={equipment} onChange={e => onChange(e)} />

                        <button className='add-btn'>Добавить упражнение</button>
                    </form>

                </div>
            </div>

            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment> 
    )
}

export default AddExercise;