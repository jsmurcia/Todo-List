import React, { useState } from 'react'
import'./FormTodo.css'

const FormTodo = props => {

    const [description, setDescription] = useState("");
    const {handleAddItem}=props;

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(description);

        handleAddItem({
            done:false,
            id:(+new Date()).toString(),
            description
        })
        console.log(description)
        setDescription("")

    }

    return (
        <form onSubmit={handleSubmit} className="todo-list-form">
            <h1 >TODO LIST</h1>
            <div className='todo-list-input'>
                
                    <input
                        type="text"
                        className="text"
                        value={description}
                        onChange={e=>setDescription(e.target.value)}
                        placeholder="writes..."
                    />
                    <button
                        className='button-input-add'
                        disabled={description?"":"disabled"}
                    >
                        Add
                    </button>
                
            </div>
        </form>


    )
}

export default FormTodo