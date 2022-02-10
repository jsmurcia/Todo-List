import React from 'react'
import CheckBox from './CheckBox'
import './TaskList.css'
const TaskList = props => {

    const {list,setList}=props

    const onChangeStatus = e =>{
        const {name,checked}=e.target;
        const updateList=list.map(item=>({
            ...item,
            done:item.id===name?checked:item.done 
        }));
        setList(updateList);
    };



    const chk = list.map(item=>(
        <CheckBox key={item.id} data={item} onChange={onChangeStatus}/>
    ));

    
    const onClickRemoveltem=e=>{
        const updateList = list.filter(item=>item.done);
        setList(updateList)
    }
    

  return (
    <div className='todo-list-task'>
        
       {list.length?chk:"No tasks"}
       {
        list.length?(
            <p>
                <button className='button-delete'  onClick={onClickRemoveltem}>
                    Delete all done
                </button>
            </p>
        ):
        null
       }
    </div>
  )
}

export default TaskList
