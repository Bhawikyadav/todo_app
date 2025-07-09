import React, { useState } from 'react'

function Todo() {
    const [display, setDisplay] = useState("");
    const [addTodo, setAddtodo] = useState([]);

    const handlechange = (e) => {
        setDisplay(e.target.value);
    }
    const removeAll = () => {
        setAddtodo([])
    }
    const handleAdd = () => {
        //setAddtodo([...Addtodo,display])  but it is asyn so update will take time 
        {
            display != [] && setAddtodo((addTodo) => {
                const updateTodo = [...addTodo, display]
                setDisplay("")          //this arrow func help to deal with asyn and make 
                return updateTodo;
            })
        }

    }
    const removeitem = (i) => {
    //     const updatedList = [...addTodo.slice(0, i),     // keep items before the one we want to remove
    //     ...addTodo.slice(i + 1)     // keep items after the one we want to remove
    //     ];
    //     setAddtodo(updatedList);
    // 
    const updateList = addTodo.filter((elem,id)=>{
      return i!=id;}
    )
    setAddtodo(updateList);
    };
    return (
        <>
            <div className="container m-auto bg-gradient-to-l bg-violet-300  text-center py-10">
                <h1 className='text-3xl pb-4  font-bold ' >Hey I am Todo list </h1>
                <div className='h-16 text-2xl'>
                    <input className='border-2   border-black  p-2  w-2/3 mr-4 ' value={display} onChange={handlechange} type="text" placeholder='Add Activity' />
                    <button onClick={handleAdd} className='border-2 border-black  p-2 bg-blue-800 text-white  '>Add item </button>
                </div>
                <div className='display-Todo'>
                    <p className='text-3xl text-left p-6 font-bold '> Here is your list </p>
                    {addTodo != [] && addTodo.map((data, i) => {
                        return (

                            <div key={i} className='bg-slate-200 text-left flex justify-between  rounded-sm p-2 m-2 ' >
                                <p className='text-3xl font-semi-bold  ' >{data}</p>
                                <button onClick={() => removeitem(i)} className='border-2 border-black p-1 rounded-sm bg-blue-800 text-white  '>Delete</button>

                            </div>


                        )
                    })}

                    {addTodo.length >= 1 && <button onClick={removeAll} className='border-2 border-black  p-2 bg-blue-800 text-white  '>
                        Remove All
                    </button>}

                </div>

            </div>
        </>
    )
}
export default Todo;