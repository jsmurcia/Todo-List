import TaskList from './TaskList'
import React, { useState } from 'react'
import FormTodo from './FormTodo'

const Container = () => {

    const [list, setList] = useState([]);

    const handleAddItem=addItem=>{
        setList([...list,addItem])
    }
  return (
    <div>

        <FormTodo handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>

    </div>
  )
}

export default Container