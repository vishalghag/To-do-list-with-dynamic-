import Button from '../Button/Button'
import style from './List.module.css'
const List = ({list, isDoneHandler, deleteHandler}) =>{

    // const { list, btnText} = props

    const listItem = list.map((task,i)=>(

        <li key={i}> 
            {/* it is called has conditional styling */}
            <span className={task.isDone ? style.btnstyle: ''}> 
            {task.items}
            </span>
          
            {task.isDone && (<Button btnText ="Delete" add={()=>{deleteHandler(i)}}/>)}

            {!task.isDone && (<Button btnText ="Done" add={()=>{isDoneHandler(i)}}/>)}
            
        </li>   
    ))

    return(
        <div className={style.field}>
        <ul>
            {listItem}
        </ul>
        </div>
    )
}

export default List;