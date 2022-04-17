import { useEffect, useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import List from "../List/List";

const Todo = () =>{

    const [list,setList] = useState([])
    const [input,setInput] = useState('')

    //These is how we write componentDidMount in react 
    //imp point it will only get load only first time of hardload , rather than that it will be not seen in console. 
    useEffect(()=>{
        console.log("ComponentDidMount");
        const values = localStorage.getItem('todoList')
        if(values){
            setList(JSON.parse(values))
        }
    },[]) //dependency[] list should always be empty

        //These is componentDidUpdate in which it gives us whether the list is updated or not 
        useEffect(()=>{
            console.log("Component didUpDate");
            localStorage.setItem('todoList', JSON.stringify(list))
        },[list])

    //These is how we write componentDidUmount in these we use return keyword it is used to see which component get 
    // deleted and also used in navigation
    useEffect(()=>{
        return() =>{
            console.log("It is componentDidUmount");
        }
    },[])

    console.log("Rendering of todo list"); // it will be printed first has whole page render first.

    const addItemhandler = () =>{
        // console.log("click");
        if(input.trim())
        {
        const item = [...list]; // it is used to genrate a clone copy 
        item.push({
            items:input,
            isDone:false
        })
        // item.push(input); // in here we are pushing input value in list
        setList(item);
        setInput('');
        }
        setInput('');
    }

    const onChangeHandler = (e) =>{

        const value = e.target.value
        // console.log(value); // always check if it is printing or not
        setInput(value);

    }
    
   const onEnter = (e) =>{
       const keyCode = e.keyCode;
       if(keyCode === 13)
       {
        addItemhandler();
       }
   } 

   const isDoneHandler = (i) =>{
       console.log("enter in list",i);
       const items = [...list];
       items[i].isDone = true;
       setList(items)
   }

   const deleteHandler = (i) =>{
       const items = [...list];
       items.splice(i,1);
       setList(items);
   }

    return(
        <>
        <h3>Todo lsit</h3>
        <Display values={onChangeHandler} value={input} onenter={onEnter}/>
        <Button btnText="Add Item's" 
            add={addItemhandler}
        />
        <List list={list}
            isDoneHandler={isDoneHandler}
            deleteHandler={deleteHandler}
        />
        </>
    )
}

export default Todo;