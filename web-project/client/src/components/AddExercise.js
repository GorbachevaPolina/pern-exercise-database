import React, {Fragment, useState} from "react";

const AddExercise = () => {

    const [show, setShow] = useState('modal-hidden');
    // const [content, setContent] = useState('');
    // const [name, setName] = useState('');
    // const [description, setDescription] = useState('')
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
        try {
            const body = {content, name, description, type, muscle, equipment}
            const response = await fetch(
                'http://localhost:5000/catalog/add',
                {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(body)
                }
            ) 

            // setInputs({
            //     content: '',
            //     name: '',
            //     description: '',
            //     type: '',
            //     muscle: '',
            //     equipment: ''
            // })
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <button className='add-catalog-btn' onClick={showModal}>Add exercises to catalog</button>

            <div className={`modal ${show} add-modal`}>
                <div className='modal-header'> 
                    <h4 className="modal-title">Add Exercise</h4>
                    <button type="button" className="close" onClick={hideModal}>&times;</button>
                </div>

                <div className='modal-content'>
                    <form className='w-100' onSubmit={onSubmitForm}>
                        <p>Add a video link: </p>
                        <input type='text' className='form-control' name='content' placeholder='link' value={content} onChange={e => onChange(e)} />

                        <p>Add a name for exercise: </p>
                        <input type='text' className='form-control' name='name' placeholder='name' value={name} onChange={e => onChange(e)} />

                        <p>Add a description for exercise: </p>
                        <input type='text' className='form-control' name='description' placeholder='description' value={description} onChange={e => onChange(e)} />

                        <h4>Add categories</h4>
                        <p>Type: </p>
                        <input type='text' className='form-control' name='type' placeholder='type' value={type} onChange={e => onChange(e)} />

                        <p>Muscle group: </p>
                        <input type='text' className='form-control' name='muscle' placeholder='muscle group' value={muscle} onChange={e => onChange(e)} />

                        <p>Equipment: </p>
                        <input type='text' className='form-control' name='equipment' placeholder='equipment' value={equipment} onChange={e => onChange(e)} />

                        <button className='add-btn'>Add exercise</button>
                    </form>

                </div>
            </div>

            <div className={`modal-overlay ${show}`} onClick={hideModal}>

            </div>
        </Fragment> 
    )
}

export default AddExercise;